# egg-mailgun

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mailgun.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mailgun
[travis-image]: https://img.shields.io/travis/HuangXiZhou/egg-mailgun.svg?style=flat-square
[travis-url]: https://travis-ci.org/HuangXiZhou/egg-mailgun
[codecov-image]: https://img.shields.io/codecov/c/github/HuangXiZhou/egg-mailgun.svg?style=flat-square
[codecov-url]: https://codecov.io/github/HuangXiZhou/egg-mailgun?branch=master
[david-image]: https://img.shields.io/david/HuangXiZhou/egg-mailgun.svg?style=flat-square
[david-url]: https://david-dm.org/HuangXiZhou/egg-mailgun
[snyk-image]: https://snyk.io/test/npm/egg-mailgun/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mailgun
[download-image]: https://img.shields.io/npm/dm/egg-mailgun.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mailgun

Mailgun Plugin for egg.

This plugin based on [mailgun-js](https://github.com/bojand/mailgun-js), if you want to know specific usage, you should refer to the document of [mailgun-js](https://github.com/bojand/mailgun-js).

## Install

```bash
$ npm i egg-mailgun --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mailgun = {
  enable: true,
  package: 'egg-mailgun',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mailgun = {
  client: {
    // api key
    apiKey: 'your api key',
    // domain
    domain: 'your domain name',
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

### Sending Messages

use mailgun api at controller:

```js
// {app_root}/app/controller/email.js
const Controller = require('egg').Controller;

class EmailController extends Controller {
  async send() {
    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    };

    this.ctx.body = await this.app.mailgun.messages().send(data);
  }
}

module.exports = EmailController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/HuangXiZhou/egg-mailgun/issues).

## License

[MIT](LICENSE)
