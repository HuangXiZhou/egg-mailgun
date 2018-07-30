'use strict';

const mock = require('egg-mock');

describe('test/mailgun.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mailgun-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mailgun')
      .expect(200);
  });


  it('should send an test email', () => {
    return app.httpRequest()
      .get('/send')
      .expect(200);
  });
});
