const mongoose = require('mongoose');

//Trabalhando na conexão do nosso banco de dados

const connectDB = async (dbURI) => {
    try{
        if(mongoose.connection.readyState === 0){
            const conn = await mongoose.connect(dbURI);
            //Apenas log quando a conexão for estabelecida
            if(conn){
                //console.log(`MongoDB connected: ${conn.connection.host}`);
            }
        } else {
            //console.log('MongoDB já connectado');
        }
    }catch(err){
        console.error(`Error: ${err.message}`);
        //process.exit(1);
    }
}

module.exports = connectDB;