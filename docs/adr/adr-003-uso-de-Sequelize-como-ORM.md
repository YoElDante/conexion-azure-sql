# ADR-003 — Uso de Sequelize como ORM en lugar de consultas SQL directas

## Estado

Aceptado

## Contexto

El proyecto necesita interactuar con una base de datos **Azure SQL Database** que contiene gran cantidad de tablas y relaciones.
Si bien es posible realizar consultas directas mediante el driver `tedious`, esto implica escribir y mantener **SQL plano** en todo el código.
Esa práctica puede dificultar la escalabilidad, la consistencia en las consultas y la abstracción de la lógica de negocio.

Un **ORM (Object-Relational Mapping)** permite trabajar con la base de datos utilizando **modelos en JavaScript/TypeScript**, facilitando la lectura, escritura y mantenimiento del código, además de ofrecer herramientas para migraciones y asociaciones.

## Decisión

Adoptamos **Sequelize** como ORM oficial del proyecto, ya que:

* Soporta **SQL Server/Azure SQL** a través de `tedious`.
* Permite definir modelos que representan tablas y relaciones de manera declarativa.
* Facilita el desarrollo de **CRUDs** y consultas complejas con un API uniforme.
* Ofrece soporte para **migraciones** y **seeders**, ayudando a versionar cambios en la base de datos.
* Está activamente mantenido y es compatible con proyectos Node.js en producción.

## Seguridad Informática

Sequelize contribuye a la seguridad del proyecto al manejar consultas parametrizadas por defecto, reduciendo el riesgo de inyección SQL en comparación con escribir consultas SQL planas de forma manual. 
* Es una de las vulnerabilidades más comunes en aplicaciones web (listada en OWASP Top 10).
* Las consultas se construyen con **bindings parametrizados**, no concatenación de strings.  
* Sequelize automáticamente **escapa los valores peligrosos** que vengan de un input del usuario.  
* Esto reduce muchísimo la superficie de ataque para inyecciones SQL.

Ejemplo seguro con Sequelize:  
```js
await Pago.findOne({ where: { usuario: req.body.user } });
````

## Consecuencias

* El equipo trabajará con modelos en Sequelize en lugar de escribir SQL plano.
* Los **controllers/services** se conectarán con la base de datos a través de Sequelize.
* En situaciones específicas donde Sequelize no cubra el requerimiento (ej. consultas muy optimizadas), se podrá recurrir a **consultas SQL crudas** usando `sequelize.query()`.
* El aprendizaje inicial del ORM puede implicar una curva de adopción, pero reducirá deuda técnica a largo plazo.

## Configuración

* La dependencia se instala con:

  ```bash
  pnpm add sequelize
  ```

* El dialecto usado será `"mssql"`.
* Los modelos deberán definirse en `/models/` siguiendo buenas prácticas (nombres consistentes, uso de asociaciones `hasOne`, `hasMany`, `belongsToMany`).
* Las migraciones se ubicarán en `/migrations/` y deberán ejecutarse mediante el CLI de Sequelize.

---

