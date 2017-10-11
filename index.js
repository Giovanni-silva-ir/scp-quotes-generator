'use strict';

const express = require('express');
const router = express.Router();

const app = express();

app.use(require('./controllers'));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function(){
    console.log('application listening on port ', app.get('port'));
});