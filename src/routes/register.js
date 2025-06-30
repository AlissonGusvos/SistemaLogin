const express = require('express');
const router = express.Router();

/* IMPORT DE CLASSES */
const Auth = require('../methods/authFunc');
const Messages = require('../methods/messagesFunc');

/* INSTANCIACAO DE OBJETOS */
const auth = new Auth();
const messages = new Messages();

router.get('/',(req,res)=>{
    res.render('register')
})

router.post('/', async (req,res)=>{
    const {user, password, email} = req.body;
    const registered = await auth.register(user,password,email);
    if (registered == 200) {
        res.json({success: true, redirect: '/'});
    }
})

module.exports = router;