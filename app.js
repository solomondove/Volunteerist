const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const Ask = require('./models/Ask');
const Comment = require('./models/Comment');
const Offer = require('./models/Offer');
const path = require('path');

const users = require('./routes/api/users');
const asks = require('./routes/api/asks');
const offers = require('./routes/api/offers');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const db = require("./config/keys").mongoURI;
const mapKeys = require("./config/keys").GoogleMapsAPI;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/mapapi', (req, res) => {
  res.json(mapKeys);
})

app.use("/api/users", users);
app.use("/api/asks", asks);
app.use("/api/offers", offers);

app.post('/api/asks/:id/comments', (req, res) => {
    let comment = new Comment(req.body);
    comment.save().then(result => (
      Ask.findByIdAndUpdate(req.params.id, { "$push": { "comments": result._id } })
    )).catch(err => console.log(err))

    io.emit('message', req.body);
    res.sendStatus(200);
})

app.get('/api/asks/:id/comments', (req, res) => {
  Comment.find({ askId: req.params.id })
    .then(comments => res.json(comments))
    .catch(err => console.log(err))
})

app.post('/api/offers/:id/comments', (req, res) => {
    let comment = new Comment(req.body);
    comment.save().then(result => (
      Offer.findByIdAndUpdate(req.params.id, { "$push": { "comments": result._id } })
    )).catch(err => console.log(err))

    io.emit('message', req.body);
    res.sendStatus(200);
})

app.get('/api/offers/:id/comments', (req, res) => {
  Comment.find({ offerId: req.params.id })
    .then(comments => res.json(comments))
    .catch(err => console.log(err))
})

app.use(passport.initialize());
require('./config/passport')(passport);

io.on('connection', (socket) => {
  console.log("New user connected");
})


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server is running on port ${port}`));