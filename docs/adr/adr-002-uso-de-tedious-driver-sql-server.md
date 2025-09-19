# ADR-002 — Uso de `tedious` como driver para SQL Server/Azure SQL

## Estado

Aceptado

## Contexto

El proyecto requiere conectarse a una base de datos **Azure SQL Database**, la cual utiliza el motor **Microsoft SQL Server**.
Para lograr la comunicación desde **Node.js/Express**, el ORM elegido (**Sequelize**) necesita un **driver** que implemente el protocolo **TDS (Tabular Data Stream)**, que es el protocolo nativo de SQL Server.

En el ecosistema de Node.js, el paquete **`tedious`** es el driver oficial y mantenido activamente para este propósito.

## Decisión

Adoptamos **`tedious`** como dependencia obligatoria para el proyecto, ya que:

* Es el **driver oficial para Node.js** soportado por Sequelize en el dialecto `"mssql"`.
* Permite conexiones seguras y cifradas con Azure SQL (`encrypt: true`).
* Soporta autenticación tanto por **usuario/contraseña** como mediante **Azure Active Directory**.
* Es un proyecto estable y ampliamente usado en entornos productivos.

## Consecuencias

* Todas las conexiones entre **Express/Sequelize** y la base en **Azure SQL** se realizarán a través de `tedious`.
* El mantenimiento de compatibilidad con futuras versiones de Sequelize dependerá de este driver.
* En caso de migrar la base de datos a otro motor (ej. PostgreSQL), `tedious` dejaría de ser necesario y se reemplazaría por el driver correspondiente.

## Configuración

* La dependencia debe instalarse explícitamente en el proyecto:

  ```bash
  pnpm add tedious
  ```
* Debe acompañarse de Sequelize configurado con el dialecto `"mssql"`.
* Las conexiones deben forzar cifrado:

  ```js
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: false
    }
  }
  ```
---