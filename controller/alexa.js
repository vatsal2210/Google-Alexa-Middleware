const {
    
} = require('ask-sdk-core');
const {
    constants
} = require('../util/constants');
const util = require('../util');



/* Welcome Intent */
exports.welcomeIntent = conv => {
    console.log('Welcome Intent');
    if (conv.user.last.seen) {
        const welcomeBackResponse = util.selectRandomConv(constants.welcomeBack.response);;
        conv.ask(welcomeBackResponse);
        conv.noInputs = constants.noResponse;
    } else {
        conv.ask(constants.welcome.response);
    }
    conv.noInputs = constants.noResponse;
};

/* Help Intent */
exports.helpIntent = async (conv) => {
    console.log('Help Intent');
    const helpResponse = util.selectRandomConv(constants.help.response);
    conv.ask(helpResponse);
    conv.noInputs = constants.noResponse;
};

/* Fallback Intent */
exports.fallbackIntent = async (conv) => {
    console.log('Fallback Intent');
    conv.data.fallbackCount = conv.data.fallbackCount || 0;
    conv.data.fallbackCount++;
    if (conv.data.fallbackCount > 3) {
        conv.close(constants.finalFallBack.response);
    } else {
        const fallbackResponse = util.selectRandomConv(constants.fallback.response);
        conv.ask(fallbackResponse);
        conv.noInputs = constants.noResponse;
    }
};

/* Exist Conversation Intent */
exports.exitConversation = async (conv) => {
    console.log('Close Conversation Intent');
    const closeResponse = util.selectRandomConv(constants.closeConversation);
    conv.close(closeResponse);
}