/**
 * server.js
 * Entry Point de la aplicación.
 *
 * Crea el servidor HTTP y lo pone en escucha en el puerto configurado.
 * Enlaza la aplicación Express al servidor HTTP.
 * 
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-09-18
 */


const http = require('http');
const app = require('./src/app');

const config = require('./src/config/config');

const PORT = config.server.port;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`✅ Server running on http://${config.server.host}:${PORT}`);
});