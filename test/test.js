const request = require('supertest');
const app = require('../index');

describe('get /', () => {
    it('respond with hello there', (done) => {
        request(app).get('/').expect('General Kenobi; Hello there; You are a bold one', done);
    });
});