const User = require('../models/userModle');

//Cria um novo usuario
exports.createUser = async (req, res) => {
    try{
        const { name, email, password} = req.body;
        const NewUser = new User({name, email, password});
        await NewUser.save();
        return res.status(201).json(NewUser);
    } catch (error){
        console.log(error);
       return res.status(500).json({message: 'Erro ao criar usuario'});
    }
};

//Listar todos os usuarios
exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
       return res.status(200).json(users);
    }catch (error){
        return res.status(500).json({message: 'Erro ao buscar usuários'});
    }
}