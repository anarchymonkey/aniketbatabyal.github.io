// # REQUIRING ALL THE MODULES AND PATHS THAT ARE REQUIRED //
// #                                                     # //

const   express = require('express'),
        db = require('./server/db'),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        methodOverride = require('method-override'),
        indexRoute = require('./controllers/index'),
        morgan = require('morgan');

        let app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(session({
    cookie:{
        maxAge : 10000
    },
    secret : 'Hey this is a sesssion object with a key value pair',
    saveUninitialized : false,
    resave : false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
app.use(morgan('dev'));

/*  # Routings #    */

app.use(indexRoute);
/*  #   Server listeners  # */
module.exports = app;