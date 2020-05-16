const router = require('express').Router();
const { dialogflow } = require('actions-on-google');

// To print logs enable debug mode to true
const googleApp = dialogflow({ debug: false });

// Controller
const googleController = require('../controller/google');

/* Initial request from Google Request */
router.post('/fulfillment', (event, res) => {
    googleApp.handler(event.body, {}).then((data) => {
        if (data.status != 200) {
            res.send(null, {
                'fulfillmentText': data
            });
        } else {
            console.log('> ------------------ Res send --------------------- <');
            res.send(data.body);
        }
    }).catch((error) => {
        console.log('/google/fulfillment error: ', error);
        res.send(error);
    });
});


/* Welcome intent */
googleApp.intent('Default Welcome Intent', googleController.welcomeIntent);
googleApp.intent('GOOGLE_ASSISTANT_WELCOME', googleController.welcomeIntent);

// Fallback Intent
googleApp.intent('Default Fallback Intent', googleController.fallbackIntent);

// Help
googleApp.intent('help', googleController.helpIntent);

// Exit Conversation
googleApp.intent('exit_conversation', googleController.exitConversation);


module.exports = router;