const router = require('express').Router();

// the routes
const shortUrlController = require('./controller/shortUrl');

router.get('/:id', shortUrlController.redirect); // This will return the url

router.post('/url', shortUrlController.wheel)

module.exports = { router }