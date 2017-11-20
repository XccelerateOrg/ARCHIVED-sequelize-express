const request = require('supertest');
const mainApp = require('../app.js').mainApp;

describe("Route ",()=>{
    it("/users should return a user page",()=>{
        request(mainApp)
            .get('/users')
            .expect(200)
            .expect('content-type',/html/)
            .end((err,res)=>{
                if(err) throw err;
            });
    });
});