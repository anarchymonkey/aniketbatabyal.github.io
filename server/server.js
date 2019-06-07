let app = require('../app'),
    http = require('http'),
    fs = require('fs');
    let port = process.env.PORT || 3000;
    app.set('port',port);
    http.createServer(app).listen(app.get('port'),(err)=>{
        try{
            if(err){
                throw new err;
            }
            console.log(`server started on port ${port}`);
        }catch(err){
            let storeErrorLogs = fs.writeFile('error.txt',err);
        }
    });