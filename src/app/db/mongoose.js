const mongoose = require("mongoose");
class Database {
    constructor() {
        this.db_connect();
    }

    async db_connect() {
        try {
            // await sleep(10000);
            this.database = await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
                retryWrites: true,
                keepAlive: true,
                socketTimeoutMS: 0,
                connectTimeoutMS: 360000
            });
            console.log("Database connection successful");
            mongoose.set('debug', true);
        } catch (err) {
            console.log(err);
        }
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = new Database();