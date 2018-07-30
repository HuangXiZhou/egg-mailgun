'use strict';

/**
 * egg-mailgun default config
 * @member Config#mailgun
 * @property {String} apiKey - mailgun api key
 * @property {String} domain - mailgun domain name
 */
exports.mailgun = {
  cilent: {
    apiKey: 'your api key',
    domain: 'your domain name',
  },
  app: true,
  agent: false,
};
