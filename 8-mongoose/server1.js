var mongoose = require('mongoose');
var assert = require('assert');
var async = require('async');

var Dishes = require('./models/dishes1');

var dbUrl = 'mongodb://localhost:27017/dishes1';
var db;
var id;

async.series([
    function (next) {
        mongoose.connect(dbUrl);
        db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('Connected to mongodb');
            next();
        });
    },
    function (next) {
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            if (err)
                return next(err);
            console.log('Collections: ', names);
            next();
        });
    },
    function (next) {
        Dishes.create({
            name: 'Uttappa',
            description: 'South Indian favourite snacks',
            comments: [
                {
                    rating: 5,
                    comment: 'Awesome',
                    author: 'Ram'
                }
            ]
        }, function (err, dish) {
            if (err)
                return next(err);
            console.log('Newly added dish:', dish);
            id = dish._id;
            next();
        });
    },
    function (next) {
        Dishes.find({}, function (err, dishes) {
            if (err)
                return next(err);
            console.log('All dishes:');
            console.log(dishes);
            next();
        });
    },
    function (next) {
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                $set: {
                    description: 'Delicious dish topped with onions'
                }
            }, { new: true })
            .exec(function (err, dish) {
                if (err)
                    return next(err);
                console.log('Updated dish:', dish);
                next();
            });
        }, 2000);
    },
    function (next) {
        Dishes.findById(id, function(err, dish) {
            if (err)
                return next(err);
            dish.comments.push({
                rating: 5,
                comment: 'Good',
                author: 'Kiran'
            });
            dish.save(function (err, dish) {
                if (err)
                    return next(err);
                console.log('Updated dish:', dish);
                next();
            })
        });
    },
    function (next) {
        Dishes.find({}, function (err, dishes) {
            if (err)
                return next(err);
            console.log('All dishes:');
            console.log(dishes);
            next();
        });
    },
    function (next) {
        db.collection('dishmodels').drop(function (err) {
            if (err)
                return next(err);
            next();
        });
    }
],
function (err) {
    if (err)
        console.log('Mongoose error');
    db.close();
});
