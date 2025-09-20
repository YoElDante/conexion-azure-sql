# 📓 Diario de Desarrollo — 19-09-2025 — viernes 

## 🏃 Sprint
- Sprint nro: 00
- Semana: 01

## 🗂️ Contexto
- Proyecto: Conexion y CRUD a base de datos en Azure 
- Etapa de desarrollo: Inicio
- Objetivo general del día: 
  * definir el BackLog del Proyecto (pendiente de dia anterior) ✅
  * Lograr coneccion con BD segun protocolo Azure ✅
  * Estudiar y Definicion de tablas a utilizar 
  * Maquetacion de tablas en el ORM
- Estimación de tiempo
  * Estimo que todo eso puede tomar entre 8 y 10 horas


## ✅ Logros
- Tareas completadas  
  * Definición de la primera parte crucial del BackLog del proyecto
  * Se logro coneccion efectiva la BD en Azure mediante Sequelize y Tedious. Se testeo mediante [`/src/tests/dbCnnection.test.js`](../../../../src/tests/dbConnection.test.js)
  * Se pusieron todas las claves en archivo .env para mantener su seguridad y no exponerlas en el código 


- Funcionalidades implementadas
  * sin novedad

- Bugs resueltos
  * Sin novedad

## ⚙️ Decisiones técnicas / cambios de dirección
- Qué decidí hacer distinto y por qué
  * para poder estructurar el trabajo y el desarrollo, comence haciendo la primera parte del backlog para poder presentarla a mi jefe y saber que voy en el camino correcto, ademas de definir los pasos a seguir lara la integracion con la base de datos en azure. Pero luego se extendio la creación del backlog por lo largo que es este documento en realidad, asi que avanze hasta un punto que me deja seguir trabajando y es util para mi jefe y lo deje para mas adelante. Y ahora sigo con la parte de programación propiamente dicha del proyecto.
  * Me he decidido por configurar un servidor MCP oficial de Microsoft para la coneccion de un LLM con Azure SQL. Al darle permisos de solo lectura, voy a poder conectar el copilot de VSCode directo a la BD de prueba y podre hacerle preguntas en Lenguaje Natural sobre la composicion de las tablas, sus relaciones mas rebuscadas y una ayuda muy precisa para generar los mapeos con Sequelize
  * Para tal efecto se ha creado en SSMS (Microsoft SQL Server) en alcaldiasmlqdsprueba.database.windows.net y en la BD PDBpgII6eODRxh7, mediante consultas el usuario "usuario_readonly" con pass "ContraseñaSegura123!" 
  (consulta: 
  ```
  -- Crear login a nivel de servidor CREATE LOGIN usuario_readonly WITH PASSWORD = 'ContraseñaSegura123!';)
  ```
  con la siguiente asignacion de roles restringidos
  ```
  -- Asignar permisos de solo lectura
  EXEC sp_addrolemember 'db_datareader', 'usuario_readonly';
  ```
  Esto para poder darle al Servidor MCP el permiso necesario para poder interactuar con BD sin modificarla por error.

- Referencia a documentación / dudas
  * sin novedad

## 🚧 Bloqueos / impedimentos
- Qué cosas me frenaron
  * No tener una dimención de la proporción real de un backlog completo

- Qué necesito para resolverlos
  * confirmación de jefe para seguir o modificar algo
  

## ⏱️ Tiempo estimado vs real

 - Planificado: 10 horas

 - Inicio: 13:30

 - Real:

  1. 13:30 – 14:30 → 1h
  2. 14:30 – 16:40 → break (no contabilizado)
  3. 16:40 – 21:10 → 4h 30m
  4. 21:10 – 00:15 → break (no contabilizado)
  5. 00:15 – 03:00 → 2h 45m

 - Total horas trabajadas:** 1 + 4.5 + 2.75 = **8 horas y 15 minutos**

 - Final estimado: \~02:00 (aproximación antes del cierre real)


## 📚 Lecciones Aprendidas / Notas útiles
- Qué funcionó bien


- Lo que evitaría la próxima vez


## 🔮 Lo que voy a hacer mañana
- Prioridades
  * Coneccion de Copilot de VSCode con Server MCP oficial de Microsoft Azure SQL para análisis de BD
  * Creacion de Archivos de mapero para Sequelize

- Tareas concretas

- Estimación de tiempo
  * Estimo unas 8 horas
