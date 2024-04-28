// models/userModel.js
let users = [];

class User {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCriacao = new Date();
    }
}

module.exports = {
    User,
    users
};
