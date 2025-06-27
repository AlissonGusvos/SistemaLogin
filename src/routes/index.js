const express = require("express");
const router = express.Router();

/* IMPORT DE CLASSES */
const Auth = require('../methods/authFunc');

/* INSTANCIACAO DE OBJETOS */
const auth = new Auth();

router.get("/",(req,res)=>{
    res.render('index');
})

router.post('/',(req,res)=>{
    const {user , password} = req.body;
    console.log(auth.login(user,password));
    
})

module.exports = router;