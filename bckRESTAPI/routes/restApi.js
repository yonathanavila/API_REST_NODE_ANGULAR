// @dev Route localhost:3000/api/
var express = require('express');
var bodyParser = require('body-parser');
const app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var usuarios = [{
    nombre: 'Juan',
    apellido: 'Perez',
    fechaNacimiento: '01/01/2000',
    pais: 'Honduras',
}];

// @dev Hello World 
router.get('/', function (req, res, next) {
    res.send("Hello World!");
});

// @dev Post a new user
router.post('/usuarios', function (req, res, next) {

    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais,
    }

    usuarios.push(usuario);
    res.send({ mensaje: "Usuario agregado", "usuario": usuario });
});

// @dev Get specific user
router.get('/usuarios/:id', function (req, res, next) {
    if (req.params.id > usuarios.length - 1) {
        res.send("No se encontro el usuario");
    } else {
        res.send(usuarios[req.params.id]);
    }

});

// @dev Get all users
router.get('/usuarios', function (req, res, next) {
    res.send(usuarios);
});

// @dev Update specific user
router.put('/usuarios/:id', function (req, res, next) {
    if (req.params.id > usuarios.length - 1) {
        res.send("No se encontro el usuario");
    } else {
        usuarios[req.params.id].nombre = req.body.nombre;
        usuarios[req.params.id].apellido = req.body.apellido;
        usuarios[req.params.id].fechaNacimiento = req.body.fechaNacimiento;
        usuarios[req.params.id].pais = req.body.pais;
        res.send(usuarios[req.params.id]);
    }
});

// @dev Delete specific user
router.delete('/usuarios/:id', function (req, res, next) {
    if (req.params.id > usuarios.length - 1) {
        res.send("No se encontro el usuario");
    } else {
        usuarios.splice(req.params.id, 1);
        res.send("Usuario eliminado");
    }
});

module.exports = router;
