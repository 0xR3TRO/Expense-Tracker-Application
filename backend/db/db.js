const mongoose = require('mongoose');
require('dotenv').config()

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (err) {
        console.log('DB Connection Error \n' + err);
    }
}

module.exports = {db}