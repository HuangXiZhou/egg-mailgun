'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.mailgun.name;
  }

  async send() {
    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!',
      'o:testmode': 'true',
    };

    this.ctx.body = await this.app.mailgun.messages().send(data);
  }
}

module.exports = HomeController;
