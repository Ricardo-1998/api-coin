const mongoose = require('mongoose'),
    coinModel = require('../models/Coin');

const CoinController = {};

CoinController.getAll = function (req, res) {
    // Obtener todos los post de la base datos
    coinModel.find({},function(err, coins){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ ok:true , coins});
        }
    });
    // Enviarlos como respuesta en JSON
};

CoinController.get = function (req, res) {
    // Buscar por id, el psot
    coinModel.findOne({_id: req.params.id }, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
    // si se encontro darlo como JSON
    // sino err
}

CoinController.getByCountry = function (req, res) {
    // Buscar por id, el psot
    coinModel.findOne({country: req.params.country}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
    // si se encontro darlo como JSON
    // sino err
}

CoinController.getByName = function (req, res) {
    // Buscar por id, el psot
    coinModel.findOne({name: req.params.name}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
    // si se encontro darlo como JSON
    // sino err
}
CoinController.getByYear = function (req, res) {
    // Buscar por id, el psot
    coinModel.findOne({year: req.params.year}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
    // si se encontro darlo como JSON
    // sino err
}
CoinController.getByAvailable = function (req, res) {
    // Buscar por id, el psot
    coinModel.findOne({isAvailable: req.params.status}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
    // si se encontro darlo como JSON
    // sino err
}

module.exports = CoinController;