const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.PORT)
module.exports = {
    PORT: process.env.PORT,
    MONGODB_LOGGER_URL: process.env.MONGODB_LOGGER_URL,
    MONGODB_URL: process.env.MONGODB_URL,
    NODE_ENV: process.env.NODE_ENV || "development"
}