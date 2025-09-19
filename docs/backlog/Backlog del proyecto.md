# Backlog del Proyecto: Portal de pagos digitales para Municipalidades y Comunas 

## 0. Índice del Backlog

1. [Visión del Proyecto y Objetivos — Portal de Pagos](#1-visión-del-proyecto-y-objetivos-—-portal-de-pagos)
   - [1.1. Propósito del portal de pagos](#11-propósito-del-portal-de-pagos)
   - [1.2. Beneficios esperados del Portal de Pagos](#12-beneficios-esperados-del-portal-de-pagos)
   - [1.3. Alcance inicial (MVP del portal)](#13-alcance-inicial-mvp-del-portal)
   - [1.4. Visión a futuro (funcionalidades extendidas del portal)](#14-visión-a-futuro-funcionalidades-extendidas-del-portal)

2. [Requerimientos Generales](#2-requerimientos-generales)
   - [2.1 Funcionalidades clave](#21-funcionalidades-clave)
      - [MVP (Minimum Viable Product) — Portal de Pagos](#mvp-minimum-viable-product-—-portal-de-pagos)
      - [Funcionalidades extendidas (Full Project)](#funcionalidades-extendidas-full-project)
   - [2.2 Restricciones técnicas y de negocio](#22-restricciones-técnicas-y-de-negocio)

3. [Arquitectura y Tecnologías](#3-arquitectura-y-tecnologías)
   - [3.1 Tecnologías principales](#31-tecnologías-principales)
      - [3.1.1 Backend](#311-backend)
      - [3.1.2 Base de datos](#312-base-de-datos)
      - [3.1.3 Frontend](#313-frontend)
   - [3.2 Integraciones externas](#32-integraciones-externas)
   - [3.3 Organización del proyecto](#33-organización-del-proyecto)
   - [3.4 Herramientas y dependencias clave](#34-herramientas-y-dependencias-clave)

4. [Épicas e Historias de Usuario](#4-épicas-e-historias-de-usuario)
   - [4.1 Épica: Conexión segura con la base de datos en Azure](#41-épica-conexión-segura-con-la-base-de-datos-en-azure)
   - [4.2 Épica: Visualización de deudas](#42-épica-visualización-de-deudas)
   - [4.3 Épica: Generación de QR para pagos](#43-épica-generación-de-qr-para-pagos)
   - [4.4 Épica: Registro y confirmación de pagos](#44-épica-registro-y-confirmación-de-pagos)
   - [4.5 Épica: Autenticación de contribuyentes (funcionalidad extendida)](#45-épica-autenticación-de-contribuyentes-funcionalidad-extendida)
   - [4.6 Épica: Dashboard administrativo (funcionalidad extendida)](#46-épica-dashboard-administrativo-funcionalidad-extendida)

5. [Estrategia de despliegue y entornos](#5-estrategia-de-despliegue-y-entornos)
   - [Diagrama visual de entornos](#diagrama-visual-de-entornos)

6. [Puntos faltantes para concluir el backlog](#6-puntos-faltantes-para-concluir-el-backlog)
   - [6.1 Priorización y planificación temporal](#61-priorización-y-planificación-temporal)
   - [6.2 Criterios de aceptación y definición de done](#62-criterios-de-aceptación-y-definición-de-done)
   - [6.3 Riesgos y mitigaciones](#63-riesgos-y-mitigaciones)
   - [6.4 Documentación y seguimiento](#64-documentación-y-seguimiento)


## 1. Visión del Proyecto y Objetivos — Portal de Pagos

### 1.1. Propósito del portal de pagos

El **Portal de Pagos Municipales** es un producto web adicional que complementa el software de gestión administrativa **ALCALD+ÍA**, desarrollado por el Sr. Contador Publico Eduardo Daniel Ferreyra.
Su objetivo principal es **facilitar a los contribuyentes de pequeñas comunas y municipalidades el cumplimiento de sus obligaciones** de manera digital, accesible y segura, sin reemplazar la gestión interna realizada a través de ALCALD+ÍA.

El portal permitirá:

* **Consulta digital de deudas**: tasas, automotores, comercio, obras, multas, y otros conceptos definidos por cada municipalidad.
* **Pago online mediante QR**: compatible con diversas fintechs, sin que el portal gestione directamente los fondos.
* **Actualización automática de la base de datos compartida en Azure**: de manera que los pagos realizados queden reflejados en ALCALD+ÍA para uso interno por los empleados municipales.
* **Experiencia mobile-first**: priorizando el uso desde celulares, pero con disponibilidad en desktop.

> Nota: Aunque el portal comparte la base de datos con ALCALD+ÍA, **no sustituye ni altera la funcionalidad interna del software administrativo**; funciona como un módulo adicional orientado al contribuyente.

---

### 1.2. Beneficios esperados del Portal de Pagos

#### Para la municipalidad:

* **Facilita la recaudación**: permite que los contribuyentes puedan abonar sus obligaciones sin intermediarios.
* **Mejora la transparencia y seguimiento**: pagos registrados en tiempo real en la base de datos compartida.
* **Reducción de esfuerzo manual**: disminuye la necesidad de que los empleados municipales gestionen pagos físicos o registros duplicados.

#### Para los contribuyentes:

* **Accesibilidad**: ingresar y consultar deudas desde cualquier dispositivo móvil.
* **Claridad y control**: ver detalle de conceptos adeudados, pagados y vencidos, con opción de seleccionar qué abonar.
* **Comodidad en el pago**: generación de QR que puede ser escaneado por cualquier fintech compatible, simplificando el proceso de pago.

---

### 1.3. Alcance inicial (MVP del portal)

* Login y autenticación de contribuyentes.
* Visualización de deudas por categoría (tasas, automotores, comercio, obras, multas, etc.).
* Generación de factura con QR para pago digital.
* Confirmación de pago y actualización en la base de datos de Azure.
* Interfaz mobile-first optimizada para celulares.

### 1.4. Visión a futuro (funcionalidades extendidas del portal)

* Histórico completo de pagos con paginado.
* Notificaciones de vencimiento.
* Dashboard de pagos recientes y reportes estadísticos para la municipalidad.
* Integración con múltiples pasarelas de pago locales.
* Soporte multi-municipalidad, permitiendo configurar varios municipios en un mismo portal.

---

## 2. Requerimientos Generales

### 2.1 Funcionalidades clave

#### MVP (Minimum Viable Product) — Portal de Pagos

1. **Consulta de deudas por DNI sin login**

   * El contribuyente puede seleccionar la categoría de su interés (ej.: automotores, tasas, comercio, obras, multas, etc.).
   * Ingresando su **DNI**, el sistema muestra únicamente los conceptos **adeudados**, incluyendo vencidos y pendientes de pago.
   * Posibilidad de **pagar directamente** los conceptos seleccionados mediante generación de QR.

2. **Generación de factura con QR**

   * QR compatible con múltiples fintechs, permitiendo pago independiente del portal.

3. **Registro de pago en base de datos Azure**

   * Actualización automática de la base de datos compartida con ALCALD+ÍA.
   * Confirmación visual de que el pago ha sido registrado.

4. **Interfaz mobile-first**

   * Optimizada para dispositivos móviles y responsive para desktop.

> **Nota prioritaria:** la conexión segura y estable con la base de datos **Azure SQL** es el primer objetivo a implementar y validar. Esto incluye configuración de Sequelize con `tedious`, pruebas de CRUD y verificación de datos.

---

#### Funcionalidades extendidas (Full Project)

1. **Login y autenticación de contribuyentes**

   * Registro seguro, manejo de contraseña y recuperación.
   * JSON Web Tokens (JWT) para sesiones y autenticación de endpoints.

2. **Histórico completo de pagos y adeudos**

   * Filtrado por fecha, categoría y estado de pago.

3. **Notificaciones y alertas**

   * Recordatorios de vencimientos por mail, SMS o WhatsApp.

4. **Dashboard administrativo**

   * Visualización de pagos recientes, reportes de recaudación por categoría y período.
   * Filtros y exportación de datos para uso interno municipal.

5. **Integración con múltiples pasarelas de pago locales**

   * Protección de webhooks de confirmación de pago mediante firma o tokens.

6. **Multi-municipalidad**

   * Configuración independiente para distintos municipios dentro de un mismo portal.

---

### 2.2 Restricciones técnicas y de negocio

1. **Base de datos compartida**

   * Todas las operaciones deben reflejarse correctamente en la **base de datos Azure SQL** utilizada por ALCALD+ÍA.
   * No se debe duplicar ni alterar información sensible de contribuyentes.

2. **Seguridad**

   * Uso de consultas parametrizadas para prevenir inyección SQL.
   * Cifrado de datos sensibles y comunicaciones HTTPS.
   * Control de acceso por roles (contribuyente vs. administración municipal).
   * Implementación de **JWT** para autenticación de usuarios en funcionalidades extendidas.
   * Protección de **webhooks** de confirmación de pagos de las fintechs mediante firmas, tokens o mecanismos equivalentes.

3. **Escalabilidad y rendimiento**

   * Optimización de consultas y paginados para manejo de grandes volúmenes de datos.
   * Capacidad de soportar múltiples usuarios concurrentes.

4. **Dependencias externas**

   * Los pagos son procesados por terceros (fintechs), el portal solo genera QR y registra confirmación de pago.

5. **Restricciones de negocio**

   * El portal **no reemplaza ni altera** la funcionalidad de ALCALD+ÍA, solo complementa la experiencia del contribuyente.
   * Cumplimiento con regulaciones locales de protección de datos (ej.: Ley de Protección de Datos Personales).

---

## 3. Arquitectura y Tecnologías

### 3.1 Tecnologías principales

**3.1.1 Backend**

* **Node.js** con **Express** como framework principal.
* **pnpm** como gestor de dependencias (se explicita aquí por ser parte de la práctica estándar del equipo).
* **Sequelize** como ORM para interactuar con la base de datos en Azure SQL.
* **API Restful**: Se utilizará para exponer endpoints que gestionen el ciclo de pago, permitiendo comunicación clara entre frontend y backend. (No es solo por mencionarlo en tu stack, sino porque es un patrón necesario en este proyecto para separar responsabilidades y facilitar integraciones futuras).

**3.1.2 Base de datos**

* **Azure SQL Database** con acceso controlado mediante el driver `tedious` y abstraído con Sequelize.
* Configuración en `/src/config/database.js`.

**3.1.3 Frontend**

* **EJS** para renderizado dinámico en el servidor.
* **SASS** para estilos, aplicando la **metodología BEM** para mantener escalabilidad y claridad en la nomenclatura de clases.

---

### 3.2 Integraciones externas

* Conexión a **fintechs / pasarelas de pago** (ejemplo: MercadoPago, Mobbex, etc.) mediante APIs oficiales.
* Validación en tiempo real de transacciones y sincronización con la base de datos.

---

### 3.3 Organización del proyecto

Arquitectura del proyecto elegida es **MVC avanzado (Controllers / Services / Repositories)**

```
/root
 ├── server.js                   # Punto de entrada del servidor
 ├── /src
 │    ├── app.js                 # Configuración central de la app
 │    ├── /config                # Configuraciones (DB, dotenv, logger, etc.)
 │    ├── /models                # Definición de modelos Sequelize
 │    ├── /controllers           # Lógica de entrada (manejo de requests)
 │    ├── /services              # Reglas de negocio
 │    ├── /repositories          # Acceso a datos (consultas específicas a DB)
 │    ├── /routes                # Definición de rutas de la API
 │    ├── /middlewares           # Middlewares (auth, error handling, logging)
 │    ├── /utils                 # Funciones auxiliares reusables (helpers)
 │    ├── /views                 # Templates EJS (frontend)
 │    ├── /public                # Recursos estáticos (CSS, JS, imágenes)
 │    ├── /tests                 # Tests unitarios e integrados
 │    └── /docs                  # Documentación (ADR, decisiones técnicas)

```

---

### 3.4 Herramientas y dependencias clave

* **pnpm** (gestión de dependencias).
* **dotenv** para variables de entorno.
* **Sequelize** + **tedious** para ORM y conexión a SQL Server en Azure.
* **node --watch** (reemplazando el uso de `nodemon`).
* **ESLint/Prettier** para estandarización de código. (con precaución hasta nuevo aviso por infección de dependencias recientes 15/09/2025)

---

## 4. Épicas e Historias de Usuario

Este punto organiza las funcionalidades del portal en **épicas** (bloques grandes de valor) y su desglose en **historias de usuario**, acompañadas de tareas técnicas asociadas.

### 4.1 Épica: Conexión segura con la base de datos en Azure

**Historia de usuario:**
“Como contribuyente, quiero que mis pagos se registren en una base de datos confiable, para que queden reflejados automáticamente en el sistema municipal.”

**Tareas técnicas:**

* Configurar Sequelize con driver `tedious`.
* Definir modelos iniciales (`Pagos`, `Contribuyentes`, `Deudas`).
* Implementar y probar operaciones CRUD en tabla de pagos.

---

### 4.2 Épica: Visualización de deudas

**Historia de usuario:**
“Como contribuyente, quiero consultar mis deudas ingresando mi DNI, para saber qué debo y poder elegir qué pagar.”

**Tareas técnicas:**

* Endpoint en Express para búsqueda de deudas.
* Vista EJS con resultados dinámicos.
* Validación de inputs para prevenir inyección SQL.

---

### 4.3 Épica: Generación de QR para pagos

**Historia de usuario:**
“Como contribuyente, quiero obtener un QR válido para mis deudas, para poder pagarlas desde cualquier fintech.”

**Tareas técnicas:**

* Integrar API de generación de QR (ej.: MercadoPago, Mobbex).
* Endpoint que genere factura con QR.
* Guardar estado “pendiente de confirmación” en la BD.

---

### 4.4 Épica: Registro y confirmación de pagos

**Historia de usuario:**
“Como contribuyente, quiero confirmar que mi pago se registró, para estar seguro de que la municipalidad lo reconoce.”

**Tareas técnicas:**

* Endpoint para recibir confirmación de la fintech (webhook).
* Actualizar estado de deuda/pago en la BD.
* Mostrar mensaje de confirmación en la interfaz de usuario.

---

### 4.5 Épica: Autenticación de contribuyentes *(funcionalidad extendida)*

**Historia de usuario:**
“Como contribuyente, quiero poder loguearme y ver mi historial, para tener un control de mis pagos.”

**Tareas técnicas:**

* Implementar registro de usuario.
* Login con JWT.
* Recuperación de contraseña.

---

### 4.6 Épica: Dashboard administrativo *(funcionalidad extendida)*

**Historia de usuario:**
“Como empleado municipal, quiero ver estadísticas de recaudación, para tener claridad sobre el estado financiero de la comuna.”

**Tareas técnicas:**

* Endpoint para listar pagos filtrados por fechas.
* Vistas con reportes gráficos.
* Exportación de datos para uso interno municipal.


---

### 5. Estrategia de despliegue y entornos

El proyecto utiliza **servicios de Microsoft Azure** y un flujo de trabajo basado en **VSCode + GitHub Copilot** para la implementación de nuevas funcionalidades, pruebas y despliegues automatizados. La estrategia de entornos está pensada para garantizar **integridad de datos, continuidad de servicio y trazabilidad de los pagos**.

* **Entorno de desarrollo (DEV):**

  * Se ejecuta localmente en VSCode, con base de datos Azure SQL en modo de pruebas.
  * Integración con **pnpm**, **Sequelize** y herramientas de linting (ESLint/Prettier).
  * Desarrollo asistido por **GitHub Copilot + ChatGPT 4.1** para acelerar escritura de código y validaciones iniciales.
  * Pruebas unitarias locales con Jest/Mocha según corresponda.

* **Entorno de pruebas (QA/TEST) en Azure:**

  * Contenedores o App Service separados de producción.
  * Base de datos de prueba replicando estructuras y relaciones de la BD principal.
  * Ejecución de pruebas de integración y de carga mínima para validar consultas SQL y endpoints REST.
  * Validación de generación de QR y registro de pagos simulados.

* **Entorno de preproducción (STAGING) en Azure:**

  * Réplica exacta del entorno productivo (App Service + base de datos).
  * Validación de despliegues, conexiones con pasarelas de pago y sincronización con ALCALD+ÍA antes de liberar cambios a usuarios.
  * Permite pruebas de integración con los flujos completos de pago y confirmación.

* **Entorno de producción (PROD) en Azure:**

  * App Service con escalado automático y alta disponibilidad.
  * Base de datos principal compartida con **ALCALD+ÍA**, con backups programados y registro de transacciones.
  * Monitoreo activo de logs y alertas de fallos o intentos de accesos no autorizados.
  * Confirmación de pagos en tiempo real desde fintechs.

**Gestión de despliegues y CI/CD:**

* Uso de **GitHub Actions o Azure DevOps Pipelines** para automatizar pruebas y despliegues entre DEV → QA → STAGING → PROD.
* **Controles de rollback** preconfigurados en Azure para revertir rápidamente en caso de error crítico.
* Registro de todas las versiones desplegadas y cambios realizados para auditoría.

> Este enfoque garantiza que los contribuyentes puedan **consultar y pagar deudas de forma segura**, mientras que la municipalidad mantiene control total sobre la base de datos y los registros contables.

**Diagrama visual textual: DEV → QA → STAGING → PROD**

Este diagrama muestra de forma clara:

1. **El flujo del desarrollo hasta producción.**
2. **Separación de entornos y finalidad de cada uno.**
3. **Interacciones críticas con servicios externos y bases de datos.**

```
+------------------+
|     VSCode +     |
|  GitHub Copilot  |
+--------+---------+
         |        
         v        
+---------------------+
|   Entorno DEV       |  ← Local +  
| - Desarrollo de     |    Base de datos 
|   funcionalidades   |    Azure SQL 
| - Pruebas unitarias |    de pruebas
| - Linting & ESLint  |
+--------+------------+
         |        
         v        
+-------------------+
|    Entorno QA     |  ← Azure App  
| - Pruebas de      |    Service 
|   integración     |    de prueba
| - Validación de   |
|   endpoints REST  |
| - Simulación de   |
|   pagos/QR        |
+--------+----------+
         |        
         v        
+---------------------+
|  Entorno STAGING    |  ← Réplica  
| - Validación final  |    exacta 
| - Integración con   |    de PROD
|   fintechs reales   |
| - Pruebas completas |
|   flujo de pagos    |
+--------+------------+
         |        
         v        
+---------------------+
|   Entorno PROD      |  ← App Service + 
| - Usuarios finales  |    Base Azure SQL 
| - Monitoreo activo  |    compartida con 
| - Alta              |    ALCALD+ÍA
|   disponibilidad    |    
| - Confirmación de   |
|   pagos en          |
|   tiempo real       |
+---------------------+

```

Notas adicionales:
- CI/CD automatizado mediante GitHub Actions / Azure DevOps Pipelines.
- Rollback seguro configurado en Azure App Service.
- Todas las transacciones y cambios quedan registrados para auditoría.
- Interacción directa con ALCALD+ÍA para reflejar pagos en la base de datos principal.
- Comunicación con pasarelas de pago externas (MercadoPago, Mobbex, etc.) mediante webhooks seguros.


---

### 🔹 Puntos que **faltan** para concluir el backlog

6. **Épicas y Desglose en Historias de Usuario**

   * Listado de épicas basadas en MVP y funcionalidades extendidas.
   * Historias de usuario para cada épica.
   * Tareas técnicas asociadas (endpoints, vistas, integraciones).

7. **Prioridades y planificación temporal**

   * Priorización de épicas según dependencia técnica y valor para el negocio.
   * Estimación de tiempo / esfuerzo por historia de usuario o tarea.

8. **Criterios de aceptación y definición de “done”**

   * Qué significa que una historia o tarea está completamente implementada y validada.

9. **Riesgos y mitigaciones**

   * Riesgos técnicos (fallos en integraciones con fintech, errores en DB).
   * Riesgos de negocio (conflictos con ALCALD+ÍA, cumplimiento regulatorio).
   * Estrategias de mitigación y alertas.

10. **Documentación y seguimiento**

    * Registro de decisiones técnicas (ADR).
    * Logs, trazabilidad, monitoreo de errores.
    * Plan de comunicación de avances.

---

