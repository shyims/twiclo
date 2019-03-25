'use strict';
const request = require('supertest');
const app = require('../app');
const passportStub = require('passport-stub');

describe('/login', () => {

  before(() => {
    passportStub.install(app);
    passportStub.login({ username: 'test' });
  });

  after(() => {
    passportStub.logout();
    passportStub.uninstall(app);
  });


  it('ログインリンク', (done) => {
    request(app)
      .get('/login')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(/<form/)
      .expect(200,done);
  });

  it('ユーザ名の表示', (done) => {
    request(app)
      .get('/login')
      .expect(/test/)
      .expect(200, done);
  });
});