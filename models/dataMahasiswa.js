const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    nama : {
        type: String,
        required : true,
    },
    NIM : {
        type: String,
        required : true,
    },
    jurusan : {
        type: String,
        required : true,
    },
    date : {
        type: Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('dataMahasiswa', PostSchema);