const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

require('dotenv').config();

// Routes
const googleRoute = require('./routes/google');
const alexaRoute = require('./routes/alexa');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('Bad Request');
});

app.use('/google', googleRoute);
app.use('/alexa', alexaRoute);

// Start service
app.listen(config.server.port, () => {
  console.log(`Server is up and listening on port ${config.server.port}`);
});

