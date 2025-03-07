const express = require('express');
const app = express();
const prot = 3000;

// app.use(function (req, res, next) {
//     console.log('Hello Word!');
//     next();
// })

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render("index")
})
app.get('/contact', function (req, res) {
    res.render("contact")
})

app.get('/error', function (req, res) {
    throw Error("Something went wrong")
})

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

app.listen(prot)
// app.get('/About', function (req, res) {
//     res.send('About Page')
// })
// app.get('/Contact', function (req, res) {
//     res.send('Contact Page')
// })
// //                params
// app.get('/Profile/:username', function (req, res) {
//     res.send(`Profile - ${req.params.username} Page`)
// })


