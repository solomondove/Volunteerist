const Offer = require('../../models/Offer');

const validateOfferInput = require('../../validation/offer');

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get("/", (req, res) => {
  Offer.find()
    .sort({ date: -1 })
    .then(offers => res.json(offers))
    .catch(err => res.status(404).json({ nooffersfound: "No offers found" }));
});

router.get('/user/:user_id', (req, res) => {
  Offer.find({ posterId: req.params.user_id })
    .then(offers => res.json(offers))
    .catch(err =>
      res.status(404).json({ nooffersfound: "No offers found from that user" })
    );
});

router.get('/:id', (req, res) => {
  Offer.findById(req.params.id)
    .then(offer => res.json(offer))
    .catch(err =>
      res.status(404).json({ noofferfound: "No offer found with that ID" })
    );
})

router.post('/', (req, res) => {
    const { errors, isValid } = validateOfferInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newOffer = new Offer({
      category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      timeCommitment: req.body.timeCommitment,
      deadline: req.body.deadline,
      timeOfDay: req.body.timeOfDay,
      posterId: req.body.posterId,
      location: req.body.location,
      address: req.body.location
    })
    newOffer.save().then(offer => res.json(offer));
  }
);

router.patch('/:id', (req, res) => {

  const { errors, isValid } = validateOfferInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Offer.findById(req.params.id)
    .then(offer => {
      Object.assign(offer, req.body);
      offer.save()
        .then(offer => res.json(offer))
        .catch(err =>
          res.status(400).json({ offernotchanged: "Offer could not be updated" })
        );
    })
    .catch(err =>
      res.status(404).json({ noofferfound: "No offer found with that ID" })
    );
}
);

router.delete('/:id', (req, res) => {
  Offer.findById(req.params.id)
    .then(offer => {
      offer.delete()
        .then(offer => res.json(offer))
        .catch(err =>
          res.status(400).json({ offernotchanged: "Offer could not be deleted" })
        );
    })
    .catch(err =>
      res.status(404).json({ noofferfound: "No offer found with that ID" })
    );
});

module.exports = router;