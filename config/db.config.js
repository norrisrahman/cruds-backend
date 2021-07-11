
const mongoose = require("mongoose")


const dbController =
mongoose.connect("mongodb://admin:admin@cluster0-shard-00-00.sgvzs.mongodb.net:27017,cluster0-shard-00-01.sgvzs.mongodb.net:27017,cluster0-shard-00-02.sgvzs.mongodb.net:27017/dataMahasiswa?ssl=true&replicaSet=atlas-3a3p9z-shard-0&authSource=admin&retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Mongodb database Mhs-List Connected"))
        .catch(err => console.log(err)
);


module.exports = dbController;
