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
        "num1": 2,
        "num2": 2
    }
    it('respond suma: 4', (done) => {
        request(app).post('/')
        .send(body)
        .expect('suma: 4', done);
    });
});