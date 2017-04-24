var express = require('express');
var bodyParser = require('body-parser');

var Dishes = require('../models/dishes');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get(function (req, res, next) {
    console.log('GET REQUEST');
    Dishes.find({}, function (err, dish) {
        if (err)
            throw err;
        res.json(dish);
    });
})

.post(function (req, res, next) {
    console.log('POST REQUEST');
    Dishes.create({
        name: req.body.name,
        description: req.body.description
    }, function (err, dish) {
        if (err)
            throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('ID: ' + dish._id);
    });
})

.delete(function (req, res, next) {
    Dishes.remove({}, function (err, resp) {
        if (err)
            throw err;
        res.json(resp);
    });
});

dishRouter.route('/:dishId')

.get(function (req, res, next) {
    Dishes.findById(req.params.dishId, function (err, dish) {
        if (err)
            throw err;
        res.json(dish);
    });
})

.put(function (req, res, next) {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: {
            description: req.body.description
        }
    }, { new: true }, function (err, dish) {
        if (err)
            throw err;
        res.json(dish);
    });
});

module.exports = dishRouter;
