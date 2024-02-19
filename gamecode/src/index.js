const express = require("express");
const path = require("path");
const hbs = require('hbs');

const app = express();

const staticpath = path.join(__dirname,'../public');
const template = path.join(__dirname,'../template/views');
const partials = path.join(__dirname,'../template/partials');

app.set('view engine','hbs');
app.set('views',template);
hbs.registerPartials(partials);

app.use(express.static(staticpath));



app.listen(8000,()=>{
    console.log("hello i am at 8000");
})