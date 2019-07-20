const request = require('supertest');
const app = require('../index');

describe('get /', () => {
    it('respond with hello there', (done) => {
        request(app).get('/').expect('Hello there; General Kenobi', done);
    });
});