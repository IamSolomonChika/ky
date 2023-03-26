const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const session = require('express-session');
const flash = require('connect-flash');
const PORT = process.env.PORT || 4000;
require('dotenv').config();

const app = express();

app.use(expresslayouts);
app.set('layout', 'layout/layout.ejs');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/imgs'));
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000},
    resave: false,
    saveUninitialized: false
}))
app.use(flash());



app.get('/', (req, res, next) => {
    res.render('index', {text: 'This is Home'})
});

app.get('/about', (req, res, next) => {
    res.render('about', {text: 'This is about'})
});

app.get('/services', (req, res, next) => {
    res.render('services', {text: 'This is services'})
});

app.get('/contact', (req, res, next) => {
    res.render('contact')
});

app.post('/send_mail', (req, res, next) => {

    const email = req.body.email;
    const reciever = process.env.RECIEVER;
    const subject = `Message from ${req.body.name}: ${req.body.subject}`;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        }
    });

    const mailOptions = {
        from: email,
        to: reciever,
        subject,
        html: `<h4>Sender's Name: ${req.body.name}</h4><h4> Sender's Email: ${email} </h4><h4> Subject: ${subject} </h4><h4>Message: ${message}</h4>`,
    }

    transporter.sendMail(mailOptions, function(error){
        if (error) {
            console.log(error);
            res.redirect('/contact');
        } else {
            console.log("Mail sent successfully");
            req.flash('message', 'Your message was sent successfully');
            res.redirect('/contact');
        }
    })
})

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT)
});