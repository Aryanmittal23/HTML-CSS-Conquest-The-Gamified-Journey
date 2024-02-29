const express = require("express");
const path = require("path");
const hbs = require('hbs');

const app = express();

const staticpath = path.join(__dirname,'../public');
const template = path.join(__dirname,'../template/views');
const partials = path.join(__dirname,'../template/partials');

app.use('/src', express.static(path.join(__dirname, 'src')));




app.set('view engine','hbs');
app.set('views',template);
hbs.registerPartials(partials);

app.use(express.static(staticpath, {
    setHeaders: (res, filepath) => {
        if (filepath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.get("/",(req,res)=>{
    res.render("homepage");
})


app.get("/register",(req,res)=>{
        res.render("registration");
    })









app.listen(8000,()=>{
    console.log("hello i am at 8000");
})