const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render('logado');
})

module.exports = router;