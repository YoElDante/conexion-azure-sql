import sequelize from '../config/database.config.js';

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('❌ No se pudo conectar a la base de datos:', error);
  }
}

testConnection();

/* Comando para conectarse desde la consola:
node src/tests/dbConnection.test.js
*/
