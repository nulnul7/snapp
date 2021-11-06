const path = require('path');
const express = require('express');
const expressSession = require('express-session');

// const Auth0Strategy = require("passport-auth0");
const passport = require('passport');
// const authRouter = require ()
const port = process.env.PORT || 5000;

//Start a server instance with express 
const app = express();
const router = express.Router();


app.use(express.static(path.join(__dirname, "public")));



app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.get("/" , (req, res)=>{
    res.render('home');
}) 


app.listen(port, ()=>{
    console.log(`Now listening on port ${port}`)    
});