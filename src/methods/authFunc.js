const connection = require('../config/db');

class Auth {

    constructor(){}

    async login(username,password) {

        try {
            const user = await this.searchUser(username,password);
            if (!user || user.nome !== username || user.senha !== password) {
                return 401;
            }
            return 200;
        }
        catch (err) {
            console.error('Erro no login: ', err);
            return 402;
        }
    }

    searchUser(username,password) {
        return new Promise((resolve, reject)=>{
            const sql = 'SELECT * FROM usuarios WHERE nome = ? AND senha = ?';
            connection.query(sql, [username,password], (err,results)=>{
                if (err) return reject(err);
                resolve(results[0]);
            });
        });
    }

    async register(username,password,email) {
        try {
            const sql = 'INSERT INTO usuarios (nome, senha, email) VALUES (?,?,?)';
            await connection.execute(sql, [username, password, email]);
            console.log('Registrado');
            return 200;
        }
        catch (err) {
            console.error('Erro ao cadastrar: ', err);
            return 401;
        }
    }
}

module.exports = Auth;