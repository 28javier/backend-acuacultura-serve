// Requires librerias
var express = require('express');
var mongoose = require('mongoose');



// Inicializar variables

var app = express();

// conexion a la bd
mongoose.connection.openUri('mongodb://localhost:27017/AcuaculturaDB', (err, res) => {

    if (err) throw err;
    console.log('Base de Datos:\x1b[32m%s\x1b[0m', ' online');
});





// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        Ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});




// Escuchar peticiones
app.listen(3000, () => {
    console.log('express serve puerto 3000:\x1b[32m%s\x1b[0m', ' online');
});