const router = require('express').Router();
const { notes } = require('../../db/db.json');


router.get('/notes', (req, res) => {
    // testing routing
    res.json(notes);
  });

  router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  res.json(notes)
  })

  module.exports = router;