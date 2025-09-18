require('dotenv');
const path = require('node:path');

const config = {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  /*
  dbPath: {
    products: path.resolve(__dirname, '../data/products.db.json'),
    users: path.resolve(__dirname, '../data/users.db.json')
  },
  */
}

module.exports = config;