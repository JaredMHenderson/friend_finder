//Dependancies 

const express = require("express");
const bodyParser = require("body-parser");
const path =  require('path');


const app = express();

//Set up initial port
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Links to route files
require('./routing/apiRoutes')(app);
require('./routing/htmlroutes')(app);


app.listen(port, (err) => {
    if(err){
        console.log('There was an error starting your server', err);
        
    }else{
        console.log('App listening on PORT:' + port);
        
    };
})