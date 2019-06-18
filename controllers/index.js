const express = require('express'),
      router = express.Router();
      
      router.get('/',(req,res)=>{
            console.log('accessed index page');
            res.render('index.ejs');
      });

      router.get('/projects',(req,res)=>{
            res.render('projects.ejs');
      });

      router.get('/skills',(req,res)=>{
            res.render('skills.ejs');
      });




      module.exports = router;