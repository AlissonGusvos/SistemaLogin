class Auth {
    constructor(){
        this.user = new Map();

        this.user.set('username','Gustavo');
        this.user.set('password','1234');
    }

    login(username,password) {
        if(this.user.get('username') !== username){
            throw new Error("Usuario errado!");
        }
        if(this.user.get('password') !== password){
            throw new Error("Senha errada!");
        }
        return true;
    }
}

module.exports = Auth;