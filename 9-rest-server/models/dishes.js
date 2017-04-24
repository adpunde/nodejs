var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
}, {
    timestamps: true
});

// First parameter used to create the collection name
var Dishes = mongoose.model('DishModel', dishSchema);

module.exports = Dishes;
