const express = require("express");
const router = express.Router();

/* IMPORT DE CLASSES */
const Auth = require('../methods/authFunc');
const Messages = require('../methods/messagesFunc');

/* INSTANCIACAO DE OBJETOS */
const auth = new Auth();
const messages = new Messages();

router.get("/",(req,res)=>{
    res.render('index');
})

router.post('/', async (req,res)=>{
    const {user , password} = req.body;
    const loggedIn = await auth.login(user,password);
    if (loggedIn == 200) {
        res.json({success: true, redirect: '/logado'});
    }else {
        var errMessage = messages.message(loggedIn);
        res.json({success: false, error: errMessage});
    }
})

module.exports = router;