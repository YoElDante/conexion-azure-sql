/**
 * Modelo Sequelize para la tabla Clientes.
 * Representa a los clientes en la base de datos.
 * 
 * Campos principales:
 * - Codigo (PK): Código único del cliente (char(7))
 * - NombreFantasia: Nombre del cliente (varchar(40))
 * - DesHabilitado: Indica si el cliente está deshabilitado (bit)
 * - Direccion: Dirección del cliente (varchar(50))
 * - Telefono: Teléfono del cliente (varchar(30))
 * - Email: Email del cliente (varchar(120))
 * - Cuit: CUIT del cliente (varchar(13))
 * - FechaAlta: Fecha de alta del cliente (datetime)
 * - Observaciones: Observaciones adicionales (varchar(200))
 * - ClienteGrupo: Código del grupo al que pertenece (char(7))
 * - MaxLimCred: Límite máximo de crédito (decimal)
 * - CondicionPago: Condición de pago (char(3))
 * - Vendedor: Código del vendedor asignado (char(3))
 * - IDENTIFICADOR: Identificador único (char(6))
 * - DOCUMENTO: Documento del cliente (char(8))
 * Relaciones:
 * - Un cliente puede tener muchas facturas (hasMany Factura)
 * - Un cliente puede tener muchas cuentas corrientes (hasMany CuentaCorriente)
 * - Un cliente puede tener muchos recibos (hasMany Recibo)
 * - Pertenece a un grupo de clientes (belongsTo ClienteGrupo)
 * - Pertenece a un vendedor (belongsTo Vendedor)
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-09-23
 */

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.config.js';


const Cliente = sequelize.define('Cliente', {
  Codigo: {
    type: DataTypes.STRING(7), // [dbo].[Cliente] = char(7)
    allowNull: false,
    primaryKey: true
  },
  NombreFantasia: {
    type: DataTypes.STRING(40),
    allowNull: true
  },
  DesHabilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  Direccion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  DirNumero: {
    type: DataTypes.STRING(6),
    allowNull: true
  },
  Piso: {
    type: DataTypes.STRING(4),
    allowNull: true
  },
  Departamento: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  Barrio: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  Ciudad: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  CodigoPostal: {
    type: DataTypes.STRING(5),
    allowNull: true
  },
  Telefono: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  Fax: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  Email: {
    type: DataTypes.STRING(120),
    allowNull: true
  },
  Provincia: {
    type: DataTypes.STRING(2),
    allowNull: true
  },
  TipoIva: {
    type: DataTypes.STRING(1),
    allowNull: true
  },
  IvaDiferencial: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  TipoTasaIva: {
    type: DataTypes.STRING(4),
    allowNull: true
  },
  TipoGanancia: {
    type: DataTypes.STRING(1),
    allowNull: true
  },
  Cuit: {
    type: DataTypes.STRING(13),
    allowNull: true
  },
  IngBrutos: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  Pais: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  FechaAlta: {
    type: DataTypes.DATE,
    allowNull: true
  },
  FechaUltmod: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Observaciones: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  ClienteGrupo: {
    type: DataTypes.STRING(7),
    allowNull: true
  },
  CodigoTipo: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  Sucursal: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  MaxLimCred: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    defaultValue: 0
  },
  CondicionPago: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  Zona: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  QListaPrecios: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  QListaOferta: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  DescuentoGeneral: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    defaultValue: 0
  },
  LLevaFlete: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  Vendedor: {
    type: DataTypes.STRING(3),
    allowNull: true
  },
  PorcentajePercepIBTucuman: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  PercepIBTucuman: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  IDENTIFICADOR: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  CodPostalAmp: {
    type: DataTypes.STRING(14),
    allowNull: true
  },
  FechaFallecimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Apellido: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  ID_COMERCIO_INDUSTRIA: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  RazonSocial: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  DOCUMENTO: {
    type: DataTypes.STRING(8),
    allowNull: false
  },
  Posedor: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'Clientes',
  timestamps: false
});


/*
// Relaciones
Cliente.associate = (models) => {
  // Un cliente puede tener muchas facturas
  Cliente.hasMany(models.Factura, {
    foreignKey: 'ClienteCodigo',
    as: 'Facturas'
  });

  // Un cliente puede tener muchas cuentas corrientes
  Cliente.hasMany(models.CuentaCorriente, {
    foreignKey: 'ClienteCodigo',
    as: 'CuentasCorrientes'
  });

  // Relación con pagos o recibos
  Cliente.hasMany(models.Recibo, {
    foreignKey: 'ClienteCodigo',
    as: 'Recibos'
  });

  // Si existe una tabla de grupos de clientes
  Cliente.belongsTo(models.ClienteGrupo, {
    foreignKey: 'ClienteGrupo',
    as: 'Grupo'
  });

  // Relación con vendedor (si está normalizada en otra tabla)
  Cliente.belongsTo(models.Vendedor, {
    foreignKey: 'Vendedor',
    as: 'VendedorAsignado'
  });
};
*/

export default Cliente;
