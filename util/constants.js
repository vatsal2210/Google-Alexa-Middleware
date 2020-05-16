const { SimpleResponse } = require('actions-on-google');

const constants = {
  /* Google./Alexa response */

  welcome: {
    response: "Welcome Prompt!",
  },

  welcomeBack: {
    response: [
      "Welcome Back 1",
      "Welcome Back 2",
      "Welcome Back 3",
    ]
  },

  help: {
    response: [
      'help 1',
      'help 2'
    ]
  },

  fallback: {
    response: [
      "I didn't get that. Can you say it again?",
      "Sorry, could you say that again?",
      "Sorry, can you say that again?",
      "Can you say that again?",
      "Sorry, I didn't get that. Can you rephrase?",
      "Sorry, what was that?",
      "One more time?",
      'What was that?',
      "Say that one more time?",
      "I didn't get that. Can you repeat?",
      "I missed that, say that again?"
    ]
  },

  finalFallBack: {
    response: 'I\'m sorry I\'m having trouble here. Let\'s talk again later.'
  },

  closeConversation: [
    'Okay, talk to you next time!',
    'Thank you for using VTG. See you next time!',
    'Alright, thanks for stopping bye.',
    'See you later, stop by anytime.',
    'Nice hanging with you. Have a good one.',
    'OK, Catch you later.',
    'OK, take care. Stop by anytime.',
    'It was productive! Hope see you soon.',
    'Great work. Talk to you later.',
    'That was fun. Have a great day!',
    'Bye! I’ll miss you until you come back.',
    'Miss you already. Feel free to bug me if you need anything.'
  ],

  noResponse:
    [
      'Are you still there?',
      'Hello?',
      new SimpleResponse({
        text: 'Talk to you later. Bye!',
        speech: 'Talk to you later. Bye!'
      })
    ],
};

module.exports = { constants };
