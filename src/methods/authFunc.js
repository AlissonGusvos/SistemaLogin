const pool = require('../config/db');
const bcrypt = require('bcrypt');

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

    async passwordEncrypt(password){
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    }

    async searchUser(username, password) {
        try {
            const sql = 'SELECT * FROM usuarios WHERE nome = ? AND senha = ?';
            const [rows] = await pool.execute(sql, [username, password]);
            return rows[0] || null;
        }  
        catch (err) {
            throw err;
        }
    }


    async register(username,password,email) {
        try {
            const passwordEncrypted = await this.passwordEncrypt(password);
            const sql = 'INSERT INTO usuarios (nome, senha, email) VALUES (?,?,?)';
            await pool.execute(sql, [username, passwordEncrypted, email]);
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