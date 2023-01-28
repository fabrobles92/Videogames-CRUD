const express = require('express');
const app = express();
const mongoose = require('mongoose')
const keys = require("./config/keys");
const path = require('path')
const bodyParser = require('body-parser')


require("./models/Videogame")
require("./models/Picture")
mongoose.connect(keys.mongoURI)

//Middlewares
app.use(bodyParser.json({limit: '50mb'}));

//Routes
require('./routes/crudRoutes')(app)

if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets 
    //like our main.js or main.css
    app.use(express.static('client/build'));
    //Express will serve up the index.html file
    //if it doesnt recognize the route
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Listening'));


