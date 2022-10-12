const router = require('express').Router();
const notes = require('../../db/db.json');
//const fs = require('fs');
//const path = require('path');



router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
  });

  router.post('/notes', (req, res) => {
    
    // fs.writeFileSync(
    //   path.join(__dirname, '../../db/db.json'),
    //   JSON.stringify(req.body, null, 2)
    // ); 
  res.json(notes)
  
  })

  module.exports = router;