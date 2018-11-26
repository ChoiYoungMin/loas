var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loasSchema = new Schema({
    boss: Number,
    server: Number,
    level: Number,
    job: Number,
    done: Number,
    nickname: String,
    say: String,
    time: String,
    time_new : String
});

module.exports = mongoose.model('loasjoin', loasSchema);

