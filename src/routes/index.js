const express = require('express');
const router = express.Router();


//rutas
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Pasteleria Nancy'});

});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', {title: 'Contacto de Pasteleria Nancy'});

});

module.exports = router;