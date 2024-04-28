const { User, users } = require('../model/User');

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
        res.json(user);
    }
};

exports.createUser = (req, res) => {
    const { nome, email, senha } = req.body;
    const newUser = new User(Date.now(), nome, email, senha);
    users.push(newUser);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, senha } = req.body;
    const user = users.find(u => u.id === id);
    if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
        user.nome = nome;
        user.email = email;
        user.senha = senha;
        res.json(user);
    }
};

exports.deleteUser = (req, res) => {
    const id = req.params.id
    let found = false;
    users.map( function(valor, index) {
        if(valor.id == id) {
            found = true;
            users.splice(index, 1);
            return res.send(valor);
        }
    });
    if(!found) {
        res.status(404).send({message: 'Usuário não encontrada'});
    }
};
