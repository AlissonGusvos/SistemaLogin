const express = require("express");
const app = express();
const path = require('path');

const PORT = 3000;

/* CONFIG MIDDLEWARE */
app.use(express.urlencoded({ extended: true }));

/* CONFIG EJS */
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

const indexRoute = require("./routes/index");

app.use('/',indexRoute);

app.listen(PORT,()=>{
    console.log(`Application running | ${PORT}`);
})