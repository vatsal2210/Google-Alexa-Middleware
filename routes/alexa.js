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
    console.log('/alexa/fulfillment error: ', error);
    res.status(401).send(error);
  });
});

/* Welcome intent */
alexaApp.intent('Default Welcome Intent', alexaController.welcomeIntent);

// Fallback Intent
googleApp.intent('System.ExceptionEncountered', alexaController.fallbackIntent);

// Help
googleApp.intent('AMAZON.HelpIntent', alexaController.helpIntent);

// Exit Conversation
googleApp.intent('AMAZON.CancelIntent', alexaController.exitConversation);
googleApp.intent('AMAZON.StopIntent', alexaController.exitConversation);

module.exports = router;