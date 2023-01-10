// APPLICATION EXPRESS.JS
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Request done !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Request well recieved!' });
    next();
});

app.use((req, res, next) => {
    console.log('Response sent successfully !');
});


module.exports = app;