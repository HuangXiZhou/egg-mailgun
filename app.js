'use strict';

const mailgun = require('./lib/mailgun');

module.exports = app => mailgun(app);
