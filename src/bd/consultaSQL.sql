-- =======================================================
-- CONSULTAS SQL EXTRAÍDAS DEL CÓDIGO PYTHON
-- Sistema de Recaudación Municipal - Alcaldía
-- =======================================================

-- =======================================================
-- 1. CONSULTA PARA OBTENER DATOS DEL CLIENTE POR DOCUMENTO
-- =======================================================
-- Esta consulta se ejecuta cuando el código ingresado tiene 8 dígitos (documento)
-- Busca el cliente por número de documento y devuelve su código, nombre y apellido

SELECT Codigo, Nombre, Apellido
FROM Clientes
WHERE DOCUMENTO = '?'; -- el simbolo ? va sin 'comillas en el código Python'

-- Parámetros: 
-- ? = Número de documento (8 dígitos)

-- =======================================================
-- 2. CONSULTA PRINCIPAL PARA OBTENER DEUDAS PENDIENTES
-- =======================================================
-- Esta es la consulta principal que obtiene todas las deudas pendientes de un cliente
-- Se construye dinámicamente según el tipo de código ingresado

-- VERSIÓN CON CÓDIGO DE CLIENTE (7 dígitos que comienzan con "00")
SELECT 
    CONVERT(VARCHAR(10), Fecha, 120) as Fecha,
    Detalle,
    Dominio,
    CONVERT(VARCHAR, NRO_CUOTA) + CONVERT(VARCHAR, ANO_CUOTA) + CONVERT(VARCHAR, ID_BIEN) as Cuota,
    Importe,
    Importe * 0.01 as Descuento,
    Importe * 1.01 as Total
FROM Clientesctacte
WHERE Codigo = '?' -- el simbolo ? va sin 'comillas en el código Python'
  AND Saldo <> 0
ORDER BY Fecha DESC;

-- VERSIÓN CON DOMINIO DE VEHÍCULO (6 o 7 dígitos que NO comienzan con "00")
SELECT 
    CONVERT(VARCHAR(10), Fecha, 120) as Fecha,
    Detalle,
    Dominio,
    CONVERT(VARCHAR, NRO_CUOTA) + CONVERT(VARCHAR, ANO_CUOTA) + CONVERT(VARCHAR, ID_BIEN) as Cuota,
    Importe,
    Importe * 0.01 as Descuento,
    Importe * 1.01 as Total
FROM Clientesctacte
WHERE TIPO_BIEN = 'AUAU' 
  AND Dominio = '?' -- el simbolo ? va sin 'comillas en el código Python'
  AND Saldo <> 0
ORDER BY Fecha DESC;

-- Parámetros:
-- ? = Código del cliente o dominio del vehículo según corresponda

-- =======================================================
-- LÓGICA DE DECISIÓN PARA LAS CONSULTAS
-- =======================================================

/*
El código Python implementa esta lógica:

1. Si el código tiene 8 dígitos:
  - Buscar cliente por DOCUMENTO
  - Obtener el código del cliente
  - Usar ese código para buscar deudas

2. Si el código tiene 7 dígitos:
  - Si comienza con "00": usar WHERE Codigo = ?
  - Si NO comienza con "00": usar WHERE TIPO_BIEN = 'AUAU' AND Dominio = ?

3. Si el código tiene 6 dígitos:
  - Usar WHERE TIPO_BIEN = 'AUAU' AND Dominio = ?

TIPOS DE BIEN identificados:
- ININ: Inmobiliario (Catastro)
- AUAU: Automotor 
- OBSA: Obras Sociales
- RRRR: Varios/Otros conceptos
- CICI: Comercio e Industria

El campo Saldo <> 0 filtra solo las deudas pendientes (no pagadas)
La consulta ordena por fecha descendente (más reciente primero)

CAMPOS CALCULADOS:
- Fecha: Convertida a formato VARCHAR de 10 caracteres (YYYY-MM-DD)
- Cuota: Concatenación de NRO_CUOTA + ANO_CUOTA + ID_BIEN
- Descuento: 1% del importe (Importe * 0.01)
- Total: Importe + 1% (Importe * 1.01)
*/