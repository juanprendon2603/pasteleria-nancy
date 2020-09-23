const express = require ('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;


//ajustes 
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//rutas
app.use(require('./routes/index'));


//Public
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(PORT);
