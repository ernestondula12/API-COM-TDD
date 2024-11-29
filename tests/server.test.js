const app = require('../app')
const supertest = require('supertest');
const request = supertest(app)

test("Deve responser na porta 5000", () => {
    return request.get("/").then(res => {
        let status = res.statusCode;
        expect(status).toEqual(200);
    }).catch(err => {
        throw new Error(err);
    })
})