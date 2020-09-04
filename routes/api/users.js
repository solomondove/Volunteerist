const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');

const express = require('express');
// const { db } = require('../../models/User');
// const db = require("../../config/keys").mongoURI;
const { isValidObjectId } = require('mongoose');
const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: "This is the users route" }));

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.status(404).json({ nouserfound: 'No user found with that ID' }))
})

router.patch('/update/:id', (req, res) => {

  User.findById(req.params.id)
  .then(user => {
    if (!user) {
      errors.id = 'User does not exist';
      return res.status(400).json(errors);
    } else {
      User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(user);
        }
      })
    }
  })
  .catch(err => console.log(err))
})

router.get('/current', passport.authenticate('jwt', { session: false }),
(req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
})

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
      return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'User already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pronouns: req.body.pronouns,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {

              const payload = JSON.parse(JSON.stringify(user));
              delete payload.password

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {

    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {

      if (isMatch) {

        const payload = JSON.parse(JSON.stringify(user));
        delete payload.password

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });

      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;