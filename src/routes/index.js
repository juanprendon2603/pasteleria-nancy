const express = require('express');
const router = express.Router();


//rutas
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Pasteleria Nancy'});

});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', {title: 'Contacto de Pasteleria Nancy'});

});

router.get('/ingreso', (req, res) => {
    res.render('ingreso.html', {title: 'Ingreso Aplicacion'});

});

router.get('/ingreso/landingusuario', (req, res) => {
    res.render('landingusuario.html', {title: 'Principal'});

});
router.get('/ingreso/landingusuario/pedidoshoy', (req, res) => {
    res.render('pedidoshoy.html', {title: 'Pedidos de Hoy'});

});
router.get('/ingreso/landingusuario/ingresopedido', (req, res) => {
    res.render('ingresopedido.html', {title: 'Ingreso Pedido'});

});
router.get('/ingreso/landingusuario/ingresoventa', (req, res) => {
    res.render('ingresoventa.html', {title: 'Ingreso Venta'});

});
router.get('/ingreso/landingusuario/consultarpedidos', (req, res) => {
    res.render('consultarpedidos.html', {title: 'Consultar Pedidos'});

});

module.exports = router;