// Sample program to connect to mongodb
var dbmod = require('./dbmod');
var async = require('async');

var dbUrl = 'mongodb://localhost:27017/newDB';
var db;
var collection = 'collection';

async.series([
    function(next) {
        dbmod.connect(dbUrl, function(err, dbres) {
            if (err)
                return next(err);
            db = dbres;
            next();
        });
    },
    function (next) {
        dbmod.insertDocument(db, collection,
            {name: 'testName', description: 'testDescription'},
            function(err, result) {
                if (err)
                    return next(err);
                next();
        });
    },
    function (next) {
        dbmod.findDocuments(db, collection, '', function(err, docs) {
            if (err)
                return next(err);
            console.log("Found documents:", docs);
            next();
        });
    },
    function (next) {
        dbmod.updateDocument(db, collection, {name: 'testName'},
            {name: 'testName', description: 'updatedDescription'},
            function(err, result) {
                if (err)
                    return next(err);
                console.log("Updated documents:", result.result);
                next();
        });
    },
    function (next) {
        dbmod.findDocuments(db, collection, '', function(err, docs) {
            if (err)
                return next(err);
            console.log("Found documents:", docs);
            next();
        });
    },
    function (next) {
        dbmod.removeDocument(db, collection, {name: 'testName'}, function(err, result) {
            if (err)
                return next(err);
            next();
        });
    },
    function (next) {
        dbmod.findDocuments(db, collection, '', function(err, docs) {
            if (err)
                return next(err);
            console.log("Found documents:", docs);
            next();
        });
    },
    function (next) {
        dbmod.dropCollection(db, collection, function (err) {
            if (err)
                return next(err);
            next();
        });
    }
],
function (err) {
    if (err)
        console.log('DB error');
    db.close();
});
