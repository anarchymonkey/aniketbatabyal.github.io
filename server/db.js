let mongoose = require('mongoose');


module.exports = mongoose.connect('mongodb://localhost/resumeModel',{useNewUrlParser:true},(err)=>{

    try{
        if(err){
            throw new err;
        }
        console.log('Database successfully connected');
    }
    catch(err){
        console.log('there is an error');
    }
});

