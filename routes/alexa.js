const router = require('express').Router();
const alexaApp = require('ask-sdk-core');

// Controller
const alexaController = require('../controller/alexa');

/* Initial request from Google Request */
router.post('/fulfillment', (event, res) => {
  console.log('Alexa request', event);
  alexaApp.handler(event.body, {}).then((data) => {
    if (data.status != 200) {
      res.send(null, {
        "fulfillmentText": data
      });
    } else {
      console.log('> ------------------ Res send --------------------- <');
      res.send(data.body);
    }
  }).catch((error) => {
    console.log('/google/fulfillment error: ', error);
    res.status(401).send(error);
  });
});

module.exports = router;