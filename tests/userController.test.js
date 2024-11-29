const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const connectDB = require('../config/db');

beforeAll(async () => {
    const dbURI = 'mongodb://localhost:27017/api_tdd_test';
    if(mongoose.connection.readyState === 0){
          //Conecta ao banco de dados de teste
        await connectDB(dbURI);
    }else{
       // console.log('Já conectado ao MongoDB no ambiente de teste');
    }
})

afterAll(async () => {
    //Desconectar do banco de dados após todos os testes
    //await mongoose.disconnect();
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
})

describe("User API", () => {
    it("Deve criar um novo usuario", () => {
     return request(app)
            .post('/api/user')
            .send({ name: 'Ernesto Ndula', email: 'ernestondula@gmail.com', password: 'Millerinho'})
            .then(res => {
                expect(res.statusCode).toEqual(201);
                expect(res.body.name).toEqual(name);
                expect(res.body.email).toEqual(email);
                expect(res.body.password).toEqual(password);
            }).catch(err => {
                throw new Error(err);
            })
    });

    /*
    it("Deve retornar todos os usuarios", async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    })*/
})