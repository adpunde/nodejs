var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        uniqeu: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

// First parameter used to create the collection name
var Dishes = mongoose.model('DishModel', dishSchema);

module.exports = Dishes;
