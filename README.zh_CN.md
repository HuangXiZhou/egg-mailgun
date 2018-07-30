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

mailgun 插件是为 egg 提供操作 mailgun API 的功能。

此插件基于 [mailgun-js](https://github.com/bojand/mailgun-js) 实现一个简单的配置封装，具体使用方法你还需要阅读 [mailgun-js](https://github.com/bojand/mailgun-js) 的文档。

## 依赖说明

### 依赖的 egg 版本

egg-mailgun 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

## 开启插件

```js
// config/plugin.js
exports.mailgun = {
  enable: true,
  package: 'egg-mailgun',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.mailgun = {
  client: {
    // api key
    apiKey: '你的 api key',
    // domain
    domain: '你的 domain name',
  },
  // 默认开启
  app: true,
  // 默认关闭
  agent: false,
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 使用场景

### 发送邮件

在 controller 中使用插件:

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

## 提问交流

请到 [egg issues](https://github.com/HuangXiZhou/egg/issues) 异步交流。

## License

[MIT](LICENSE)
