// let oneLineJoke = require('one-liner-joke');
// let figlet = require('figlet')

// console.log(oneLineJoke.getRandomJoke());

// figlet("Minham Khanada", function (err, data) {
//     if (err) {
//         console.log('Something went wrong');
//         console.log(err);
//         return;
//     }
//     console.log(data);

// })


let express = require('express');
/*
Exprass framework for node.js
exprass ka use case => routing,
routing => routing 
https://www.google.com/setting
https://www.google.com/search
/setting = settingPage
/search = serachPage
routing Types => GET POST PUT PATCH DELETE
*/

let app = express();
app.get('/',function(req,res){
    res.send("Hello haye baaye baaye!");
})
app.get('/profile',function(req,res){
    res.send("Hello Profile!");
})

app.listen(3000)