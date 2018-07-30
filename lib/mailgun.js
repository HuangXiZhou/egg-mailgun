'use strict';

const assert = require('assert');
const mailgun = require('mailgun-js');

function createMailgun(config) {
  assert(config.apiKey && config.domain,
    '[egg-mailgun] Must set `apiKey` and `domain` in mailgun\'s config');

  return mailgun(config);
}

module.exports = app => {
  app.addSingleton('mailgun', createMailgun);
};
