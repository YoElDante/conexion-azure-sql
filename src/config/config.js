/**
 * Configuración de la aplicación
 * @author Dante Delprato
 * @version 1.0.0
 * @date 2025-09-23
 */


import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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

export default config;