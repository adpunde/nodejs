// Sample program to connect to mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dbUrl = 'mongodb://localhost:27017/newDB';

MongoClient.connect(dbUrl, function(err, db) {
    assert.equal(err, null);
    console.log('Connected to MongoDB');

    var collection = db.collection('collection');

    collection.insertOne({name: 'Name', description: 'Test'}, function(err, result) {
        assert.equal(err, null);
        console.log(result.ops);

        collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found:", docs);

            db.dropCollection('collection', function(err, result) {
                assert.equal(err, null);
                db.close();
            });
        });
    });
});
