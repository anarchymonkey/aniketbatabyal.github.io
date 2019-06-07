const express = require('express'),
      router = express.Router();


      router.get('/',(req,res)=>{
            console.log('accessed index page');
            res.render('index.ejs');
      });
module.exports = router;