const oneLineJoke = require('one-liner-joke');
const figlat = require('figlet');
figlat('Minham Khanzada',function(error,data){
    if (error) {
        console.error(error);
        return
    }
    // console.log(data);
    
})
// console.log(oneLineJoke.getRandomJoke());
const exprass = require('express');
const app = exprass();

app.use(function (req, res, next) {
    console.log(`Hello middlewere`);
    next();
})

app.get('/', function (req, res) {
    res.send("Hello haye baaye baaye!");
})
app.get('/Profile', function (req, res) {
    res.send("Profile");
})
app.get('/About', function (req, res) {
    res.send("About");
})

// app.listen(3000)