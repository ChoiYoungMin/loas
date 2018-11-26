var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loasSchema = new Schema({
    name: String,
    server: Number,
    job: Number,
    nickname: String,
    say: String,
    time: String,
    time_new : String
});

module.exports = mongoose.model('islandjoin', loasSchema);

