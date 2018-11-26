var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loasSchema = new Schema({
    type: Number,
    title: String,
    server: Number,
    nickname: String,
    say: String,
    time: String,
    time_new : String
});

module.exports = mongoose.model('changejoin', loasSchema);

