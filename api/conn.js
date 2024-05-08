// copy .env.example to .env and add your values
require('dotenv').config()
const env = process.env;
const conn = {
    org: env.ORGANIZATION_NAME,
    env: env.ENVIRONMENT_NAME,
    API_KEY: env.API_KEY,
    ACCESS_TOKEN: env.ACCESS_TOKEN
};

module.exports = conn;