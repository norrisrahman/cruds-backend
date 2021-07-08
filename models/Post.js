const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    nama : {
        type: String,
        required : true
    },
    NIM : {
        type: String,
        required : true
    },
    jurusan : {
        type: String,
        required : true
    },
    date : {
        type: Date,
        default : Date.now
    }
});

module.export = mongoose.model('Post', postSchema);