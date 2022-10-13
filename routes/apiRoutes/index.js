const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('../../helpers/uuid');



router.get('/notes', (req, res) => {
    res.json(notes);
  });

  router.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
      const newNote = {
        title,
        text,
        id: uuid(),
      }
    
    notes.push(newNote);
    }
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notes, null, 2)
    ); 
  res.json(notes)
  
  })

  module.exports = router;