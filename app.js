const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const Ask = require('./models/Ask');
const Comment = require('./models/Comment');

const users = require('./routes/api/users');
const asks = require('./routes/api/asks');
const offers = require('./routes/api/offers');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const db = require("./config/keys").mongoURI;

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// app.patch('/api/asks/:id/comment', async (req, res) => {
//   let comments = Comment.find({ askId: req.params.id })
//   Ask.findById(req.params.id)
//     .then(ask => {
//       console.log(ask)
//       if (!ask) {
//         errors.id = 'Ask does not exist';
//         return res.status(400).json(errors);
//       } else {
//         Ask.findByIdAndUpdate(req.params.id, { comments: comments }, { new: true }, function (err, ask) {
//           if (err) {
//             console.log("err", err);
//             res.status(500).send(err);
//           } else {
//             io.emit('comment', req.body);
//             res.sendStatus(200);
//           }
//         })
//       }
//     })
//     .catch(err => console.log(err))
// });

app.use(passport.initialize());
require('./config/passport')(passport);

io.on('connection', (socket) => {
  console.log("New user connected");
  
  socket.on('sendMessage', (message, callback) => {
    // console.log(message)
  })

})

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

http.listen(port, () => console.log(`Server is running on port ${port}`));