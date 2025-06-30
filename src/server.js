require('dotenv').config();

const express = require("express");
const app = express();
const path = require('path');

/* CONFIG MIDDLEWARE */
app.use(express.urlencoded({ extended: true }));

/* CONFIG */
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const indexRoute = require("./routes/index");
const logadoRoute = require("./routes/logado");
const registerRoute = require("./routes/register");

app.use('/',indexRoute);
app.use('/logado',logadoRoute);
app.use('/register',registerRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Application running`);
})