const moment = require("moment");

exports.createFormatDate = (date) => moment(date, 'MM/DD/YYYY').format("dddd, MMMM Do");

exports.selectRandomConv = (responseArray) => responseArray[Math.floor(Math.random() * responseArray.length)];

