'use strict';

exports.keys = '123456';

exports.mailgun = {
  client: {
    apiKey: process.env.EGG_MAILGUN_API_KEY,
    domain: process.env.EGG_MAILGUN_DOMAIN,
  },
  app: true,
  agent: false,
};
