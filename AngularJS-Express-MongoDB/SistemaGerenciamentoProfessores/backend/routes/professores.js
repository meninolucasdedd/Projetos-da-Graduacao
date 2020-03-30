var professorService = require('../services/professor.service.mongo');
var express = require('express');
var router = express.Router();

router.get('/listar', function (req, res, next){
    professorService.listar(req, res);
});

router.post('/registrar', function(req, res, next){
    professorService.registrar(req, res);
});


router.put('/editar/:id', function(req, res, next){
    professorService.editar(req, res);
});

router.get('/recuperar/:id', function (req, res, next){
    professorService.recuperar(req, res);
});

router.delete('/apagar/:id', function(req, res, next){
    professorService.apagar(req, res);
});
router.get('/retrieve/login/:login', function (req, res, next) {
    userService.recuperarPorLogin(req, res);
});

module.exports = router;


