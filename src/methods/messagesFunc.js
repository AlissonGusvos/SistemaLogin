class Messages {

    constructor(){}

    message(status) {
        if(status == 401) {
            return "Usuário e/ou senha incorretos";
        }
        if(status == 402) {
            return "Erro ao efetuar login";
        }
    }
}

module.exports = Messages;

