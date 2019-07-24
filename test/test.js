const request = require('supertest');
const app = require('../index');

describe('get /', () => {
    it('respond with hello there', (done) => {
        request(app).get('/')
        .expect('Hello there; General Kenobi', done);
    });
});

describe('post /', () => {
    body = {
        "num1": 1,
        "num2": 3
    }
    it('respond with hello there', (done) => {
        request(app).post('/')
        .send(body)
        .expect('suma: 4', done);
    });
});