// # REQUIRING ALL THE MODULES AND PATHS THAT ARE REQUIRED //
// #                                                     # //

const   express = require('express'),
        server = require('./server/server'),
        db = require('./server/db'),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        methodOverride = require('method-override');
        port = 3000 || process.env.PORT;

let app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + 'public'));
app.use(session({
    cookie:{
        maxAge : 10000
    },
    secret : 'Hey this is a sesssion object with a key value pair',
    saveUninitialized : false,
    resave : false
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
server(port);
