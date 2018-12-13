const connection = require('./index.js');
const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    playerName: {type: String, require: true},
    playerNum: {type: Number, require: true}
})

const List = mongoose.model("List", listSchema)

module.exports = {List};