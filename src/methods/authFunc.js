const connection = require('../config/db');

class Auth {

    constructor(){
        
    }

    async login(username,password) {

        try {
            const user = await this.searchUser(username,password);
            if (!user || user.nome !== username || user.senha !== password) {
                console.log("Usuario ou senha incorretos!");
                return false;
            }
            console.log('Sucesso Login');
            return true;
        }
        catch (err) {
            console.error('Erro no login: ', err);
            return false;
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
}

module.exports = Auth;