const express = require('express'),
      server = require('http2').createSecureServer();
      module.exports = function runit(port){
      server.listen(port,(err)=>{
          try{
              if(err){
                  throw new err;
              }
              console.log(`successfully running on port ${port}`);
          }
          catch(err){
              console.log('there is an error');
          }
      });
    }