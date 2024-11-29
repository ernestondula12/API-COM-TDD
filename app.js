const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const dbURI = 'mongodb://localhost:27017/api_tdd';

const app = express();
connectDB(dbURI);

app.use(express.json());
app.use('/api', userRoutes);


app.get("/", (req, res) => {
    res.json({})
})


module.exports = app;