# Sprint 1: Configuración Base y Conexión a Base de Datos

## 📋 Metadatos del Sprint

- **Duración**: 2 semana (12-15 días hábiles)
- **Puntos de Esfuerzo Total**: 12-15 puntos
- **Prioridad MoSCoW**: Must-Have (fundamento del MVP)
- **Fecha de Inicio**: 09/10/2025
- **Fecha de Finalización**: 27/10/2025
- **Responsable**: Dante Delprato (Developer)

### Objetivos Generales
1. Configurar el entorno de desarrollo completo (GitHub Copilot, MCP, herramientas)
2. Establecer la estructura MVC avanzada del proyecto
3. Configurar conexión segura a Azure SQL con Sequelize
4. Mapear completamente la base de datos según diagrama ER
5. Dejar las bases sólidas para el desarrollo del MVP

### Dependencias
- **Externas**: Ninguna (este es el sprint fundacional)
- **Internas**: Setup local (VSCode, Node.js, Git)
- **Conocimientos previos**: Node.js/Express/Sequelize/MVC/ Servidores MCP/Trello/Agentes IA

### Output Esperado al Finalizar
- ✅ Entorno de desarrollo completamente configurado
- ✅ Repositorio en GitHub con estructura MVC
- ✅ Conexión funcional a Azure SQL
- ✅ Modelos Sequelize mapeados y testeados
- ✅ README con instrucciones de setup
- ✅ Board de Trello con tareas del Sprint 2 listo

### Métricas de Éxito
- Progreso: >80% de tareas completadas
- Calidad: Tests de conexión DB pasando al 100%
- Documentación: README actualizado
- Burnout: Nivel bajo (auto-evaluación)

---

## 🎯 FASE 0: Configuración de Herramientas de Desarrollo

> **Nota Importante**: Esta fase es fundamental y debe completarse PRIMERO. Sin estas herramientas configuradas, el resto del sprint será más difícil.

### Historia de Usuario 0.1
**Como desarrollador, quiero configurar GitHub Copilot en VSCode, para tener asistencia de IA durante todo el desarrollo del proyecto.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Configurar GitHub Copilot versión gratuita
  Given que tengo VSCode instalado
  When instalo la extensión de GitHub Copilot
  And me registro con mi cuenta de GitHub
  Then puedo usar Copilot con límites de la versión gratuita
  And veo sugerencias de código en tiempo real

Scenario: Tener plan de upgrade a Copilot Pro
  Given que necesito funcionalidades avanzadas
  When accedo a la configuración de facturación de GitHub
  Then puedo ver las opciones de Copilot Pro ($10/mes)
  And conozco los pasos para activarlo si es necesario
```

#### Tareas Desglosadas (Puntos: 2)

**Tarea 0.1.1: Instalar GitHub Copilot (30 min)**
- [✅] Abrir VSCode
- [✅] Ir a Extensions (Ctrl+Shift+X)
- [✅] Buscar "GitHub Copilot"
- [✅] Instalar "GitHub Copilot" y "GitHub Copilot Chat"
- [✅] Reiniciar VSCode
- [✅] Hacer login con tu cuenta de GitHub cuando te lo pida
- [✅] Verificar que el ícono de Copilot aparece en la barra inferior

**Tarea 0.1.2: Probar funcionalidad básica (15 min)**
- [✅] Crear un archivo `test.js`
- [✅] Escribir un comentario: `// función para sumar dos números`
- [✅] Verificar que Copilot sugiere código
- [✅] Aceptar sugerencia con Tab
- [✅] Probar Copilot Chat: Abrir panel lateral y preguntar algo simple

**Tarea 0.1.3: Documentar upgrade path (15 min)**
- [✅] Ir a https://github.com/settings/billing
- [✅] Explorar opciones de GitHub Copilot Pro
- [✅] Anotar en tu README.md del proyecto:
  ```markdown
  ## Upgrade a Copilot Pro (si necesario)
  1. Ir a: https://github.com/settings/billing
  2. Seleccionar "Copilot Pro" ($10/mes)
  3. Incluye: Claude Sonnet/Opus, más sugerencias, prioridad
  4. Activar si la versión gratuita limita tu trabajo
  ```
- [✅] Guardar documento

---

### Historia de Usuario 0.2
**Como desarrollador, quiero configurar MCP (Model Context Protocol) en VSCode con GitHub Copilot, para poder usar servidores MCP como el de Trello directamente en mi editor.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Configurar soporte MCP en VSCode
  Given que tengo GitHub Copilot instalado
  When configuro el soporte para MCP en VSCode
  Then puedo ver servidores MCP disponibles
  And puedo usar comandos MCP en Copilot Chat

Scenario: Verificar configuración MCP
  Given que MCP está configurado
  When escribo un prompt en Copilot Chat
  Then puedo invocar herramientas MCP
  And veo las respuestas correctamente
```

#### Tareas Desglosadas (Puntos: 2)

**Tarea 0.2.1: Verificar versión de Copilot (10 min)**
- [✅] Abrir VSCode
- [✅] Ir a Extensions
- [✅] Verificar que "GitHub Copilot Chat" está actualizado (versión reciente con soporte MCP)
- [✅] Si no está actualizado, actualizar extensiones
- [✅] Nota: MCP en Copilot es una característica nueva, verificar en la documentación oficial si está disponible o si necesitas Copilot Pro

**Tarea 0.2.2: Crear archivo de configuración MCP (20 min)**
- [ ] En tu directorio de usuario, crear carpeta `.github-copilot` (si no existe)
- [ ] Crear archivo `mcp-config.json` con estructura básica:
  ```json
  {
    "mcpServers": {}
  }
  ```
- [ ] Guardar archivo
- [ ] Reiniciar VSCode

**Tarea 0.2.3: Probar MCP básico (15 min)**
- [ ] Abrir Copilot Chat en VSCode
- [ ] Preguntar: "¿Puedes usar herramientas MCP?"
- [ ] Si responde afirmativamente, documentar el comportamiento
- [ ] Si no funciona, anotar para investigar (puede requerir Copilot Pro)

**Nota Importante para Dante**: 
La integración de MCP en GitHub Copilot es muy reciente. Si encuentras que **no está disponible en la versión gratuita**, tienes dos opciones:
1. **Plan A**: Actualizar a Copilot Pro (recomendado para este proyecto)
2. **Plan B**: Usar Claude Desktop App (gratis) con MCP para gestión de Trello, y Copilot solo para código

Documenta cuál camino tomas en tu README.

---

### Historia de Usuario 0.3
**Como desarrollador, quiero configurar el servidor MCP de Trello, para poder crear y gestionar tareas del proyecto directamente desde mi entorno de desarrollo.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Configurar servidor MCP de Trello
  Given que tengo acceso a la API de Trello
  When configuro el servidor MCP de Trello
  And proporciono mis credenciales de API
  Then el servidor se conecta exitosamente
  And puedo ver mis boards de Trello desde VSCode/Claude

Scenario: Crear tarea de prueba
  Given que el servidor MCP está configurado
  When envío un comando para crear una tarjeta de prueba
  Then la tarjeta se crea en mi board de Trello
  And puedo verla en la interfaz web de Trello
```

#### Tareas Desglosadas (Puntos: 3)

**Tarea 0.3.1: Obtener credenciales de Trello (20 min)**
- [ ] Ir a https://trello.com/power-ups/admin
- [ ] Crear nuevo Power-Up o API Key - https://id.atlassian.com/manage-profile/security/api-tokens
- [ ] Anotar tu **API Key**
- [ ] Generar y anotar tu **Token** (siguiendo el link que te da Trello)
- [ ] Guardar ambos en un lugar seguro (NUNCA los subas a Git)
- [ ] Crear archivo `.env.local` en tu proyecto para guardarlos:
  ```
  TRELLO_API_KEY=tu_api_key_aqui
  TRELLO_TOKEN=tu_token_aqui
  ```

**Tarea 0.3.2: Instalar servidor MCP de Trello (30 min)**

Opción A - Si MCP funciona en tu Copilot:
- [ ] Instalar el servidor MCP de Trello via npm:
  ```bash
  npm install -g @modelcontextprotocol/server-trello
  ```
- [ ] Agregar configuración a tu `mcp-config.json`:
  ```json
  {
    "mcpServers": {
      "trello": {
        "command": "mcp-server-trello",
        "env": {
          "TRELLO_API_KEY": "tu_api_key",
          "TRELLO_TOKEN": "tu_token"
        }
      }
    }
  }
  ```

Opción B - Si usas Claude Desktop:
- [ ] Descargar Claude Desktop de https://claude.ai/download
- [ ] Instalar servidor MCP de Trello
- [ ] Configurar en `claude_desktop_config.json`:
  ```json
  {
    "mcpServers": {
      "trello": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-trello"],
        "env": {
          "TRELLO_API_KEY": "tu_api_key",
          "TRELLO_TOKEN": "tu_token"
        }
      }
    }
  }
  ```

**Tarea 0.3.3: Verificar conexión con Trello (20 min)**
- [ ] Reiniciar tu aplicación (VSCode o Claude Desktop)
- [ ] En el chat, preguntar: "¿Puedes listar mis boards de Trello?"
- [ ] Verificar que lista tus boards correctamente
- [ ] Probar crear una tarjeta de prueba:
  ```
  Crea una tarjeta de prueba en mi board [nombre_board] 
  con título "Test MCP" y descripción "Verificando conexión"
  ```
- [ ] Ir a Trello web y verificar que la tarjeta se creó
- [ ] Eliminar la tarjeta de prueba

**Tarea 0.3.4: Documentar el proceso (15 min)**
- [ ] En tu README.md, agregar sección:
  ```markdown
  ## Configuración de MCP con Trello
  
  ### Prerequisitos
  - API Key de Trello
  - Token de Trello
  - GitHub Copilot Pro (o Claude Desktop)
  
  ### Pasos de configuración
  [Documentar los pasos que seguiste]
  
  ### Troubleshooting
  [Anotar problemas que encontraste y cómo los resolviste]
  ```

---

### Historia de Usuario 0.4
**Como desarrollador, quiero crear y configurar un agente MCP para gestión de tareas, para automatizar la creación de tickets en Trello desde las definiciones del backlog.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Crear board de Trello para el proyecto
  Given que tengo acceso a Trello
  When creo un nuevo board para "Portal Municipal"
  Then el board tiene las columnas estándar (Backlog, To-Do, In Progress, Review, Done)
  And está listo para recibir tareas del Sprint

Scenario: Probar creación automática de tareas
  Given que el agente MCP está configurado
  When le paso la definición de una historia de usuario
  Then el agente crea automáticamente:
    - Una tarjeta principal para la historia
    - Subtareas como checklist items
    - Labels apropiados (Must-Have, puntos)
    - Fechas estimadas
```

#### Tareas Desglosadas (Puntos: 2)

**Tarea 0.4.1: Crear estructura del board en Trello (30 min)**
- [ ] Ir a Trello web (https://trello.com)
- [ ] Crear nuevo board: "Portal Municipal de Pagos"
- [ ] Crear listas (columnas):
  - 📋 Backlog
  - 📝 To-Do
  - ⚙️ In Progress
  - 👀 Review
  - ✅ Done
- [ ] Crear labels:
  - 🔴 Must-Have
  - 🟡 Should-Have
  - 🟢 Could-Have
  - Puntos: 1, 2, 3, 4, 5
- [ ] Anotar el ID del board (lo encuentras en la URL)

**Tarea 0.4.2: Crear prompt template para el agente (45 min)**
- [ ] Crear archivo `prompts/trello-agent-template.md` en tu proyecto:
  
  ```markdown
  # Template para Agente MCP de Trello
  
  ## Contexto
  Eres un agente especializado en crear tareas de Trello desde definiciones de Sprint.
  
  ## Board de destino
  - Nombre: Portal Municipal de Pagos
  - ID: [tu_board_id]
  
  ## Estructura de columnas
  - Backlog: Tareas futuras
  - To-Do: Tareas del sprint actual
  - In Progress: En desarrollo
  - Review: Esperando revisión
  - Done: Completadas
  
  ## Formato de entrada esperado
  Cuando te pase una Historia de Usuario, debes:
  
  1. Crear tarjeta principal con:
     - Título: [Número Historia] - [Título Historia]
     - Descripción: Criterios de aceptación en formato Gherkin
     - Lista: To-Do
     - Labels: Según prioridad MoSCoW + puntos
     - Due Date: Según duración del sprint
  
  2. Agregar checklist "Tareas" con:
     - Cada subtarea como item de checklist
     - Con estimación de tiempo si está disponible
  
  3. Responder con:
     - URL de la tarjeta creada
     - Confirmación de labels aplicados
     - Resumen de checklist items
  
  ## Ejemplo de uso
  ```
  Crea tarjeta para:
  
  Historia 0.1: Configurar GitHub Copilot
  Puntos: 2
  Prioridad: Must-Have
  
  Tareas:
  - Instalar extensión (30 min)
  - Probar funcionalidad (15 min)
  - Documentar upgrade (15 min)
  ```
  ```

**Tarea 0.4.3: Probar el agente con una tarea real (30 min)**
- [ ] En tu chat con el agente MCP, usar el template anterior
- [ ] Pedirle que cree una tarjeta de prueba del Sprint 1
- [ ] Verificar en Trello que:
  - La tarjeta se creó en la lista correcta
  - Tiene los labels apropiados
  - El checklist está completo
  - La descripción es clara
- [ ] Si algo falla, ajustar el prompt template
- [ ] Documentar el prompt final que funcionó

**Tarea 0.4.4: Preparar para migración automática del Sprint (20 min)**
- [ ] Copiar TODO el contenido de este Sprint 1 (sin la Fase 0)
- [ ] Guardar en `sprint-1-tareas.md`
- [ ] Crear un prompt maestro:
  ```
  Basándote en el archivo sprint-1-tareas.md adjunto, 
  crea tarjetas en Trello para cada Historia de Usuario 
  con todas sus subtareas. Usa el formato del template 
  que te pasé anteriormente.
  ```
- [ ] Tener listo para cuando termines la Fase 0

---

## 🏗️ FASE 1: Estructura del Proyecto

### Historia de Usuario 1.1
**Como desarrollador, quiero configurar la estructura de carpetas del proyecto siguiendo el patrón MVC avanzado, para organizar el código de manera escalable y mantenible.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Inicializar proyecto con estructura MVC
  Given un repositorio Git vacío
  When creo la estructura de carpetas definida en el backlog
  Then el proyecto sigue la organización MVC por features
  And tiene todas las carpetas necesarias para el MVP

Scenario: Configurar Express con EJS y SASS
  Given la estructura de carpetas creada
  When configuro Express, EJS con Layouts y SASS 7-1
  Then el servidor arranca sin errores en puerto 3000
  And las vistas dinámicas se renderizan correctamente
  And los estilos SASS compilan a CSS

Scenario: Inicializar Git y hacer commit inicial
  Given el proyecto configurado
  When inicializo Git y creo .gitignore
  Then node_modules y archivos sensibles están ignorados
  And puedo hacer commit y push inicial a GitHub
```

#### Tareas Desglosadas (Puntos: 3)

**Tarea 1.1.1: Inicializar repositorio y configuración base (30 min)**
- [ ] Crear carpeta del proyecto: `mkdir portal-municipal-pagos`
- [ ] Entrar a la carpeta: `cd portal-municipal-pagos`
- [ ] Inicializar Git: `git init`
- [ ] Crear `.gitignore`:
  ```
  node_modules/
  .env
  .env.local
  *.log
  .DS_Store
  dist/
  build/
  ```
- [ ] Inicializar pnpm: `pnpm init`
- [ ] Editar `package.json` con información básica:
  ```json
  {
    "name": "portal-municipal-pagos",
    "version": "0.1.0",
    "description": "Portal de pagos digitales para municipalidades de Córdoba",
    "main": "src/server.js",
    "scripts": {
      "dev": "nodemon src/server.js",
      "start": "node src/server.js"
    }
  }
  ```

**Tarea 1.1.2: Instalar dependencias principales (20 min)**
- [ ] Instalar dependencias de producción:
  ```bash
  pnpm add express ejs express-ejs-layouts dotenv
  pnpm add sass nodemon
  pnpm add sequelize mysql2
  pnpm add helmet morgan
  ```
- [ ] Instalar dependencias de desarrollo:
  ```bash
  pnpm add -D sequelize-cli
  ```
- [ ] Verificar que `package.json` tiene todas las dependencias

**Tarea 1.1.3: Crear estructura completa de carpetas (45 min)**
- [ ] Crear estructura siguiendo el backlog (sección 3.3):
  ```bash
  mkdir -p src/{config,models,controllers,services,repositories,routes,middlewares,utils,views/{layouts,partials},public/{css,js,images}}
  mkdir -p tests docs
  ```
- [ ] Crear archivos base vacíos:
  ```bash
  touch src/server.js
  touch src/app.js
  touch src/config/database.js
  touch src/views/layouts/main.ejs
  touch .env.example
  touch README.md
  ```
- [ ] Verificar estructura con `tree src` (o manualmente)

**Tarea 1.1.4: Configurar servidor Express básico (45 min)**
- [ ] Editar `src/app.js` con configuración base:
  ```javascript
  const express = require('express');
  const expressLayouts = require('express-ejs-layouts');
  const path = require('path');
  const helmet = require('helmet');
  const morgan = require('morgan');
  
  const app = express();
  
  // Seguridad básica
  app.use(helmet());
  
  // Logging
  app.use(morgan('dev'));
  
  // View engine
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  app.use(expressLayouts);
  app.set('layout', 'layouts/main');
  
  // Archivos estáticos
  app.use(express.static(path.join(__dirname, 'public')));
  
  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Ruta de prueba
  app.get('/', (req, res) => {
    res.render('index', { title: 'Portal Municipal' });
  });
  
  module.exports = app;
  ```

- [ ] Editar `src/server.js`:
  ```javascript
  require('dotenv').config();
  const app = require('./app');
  
  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
  ```

- [ ] Crear `.env.example`:
  ```
  PORT=3000
  NODE_ENV=development
  
  # Azure SQL (completar luego)
  DB_HOST=
  DB_USER=
  DB_PASSWORD=
  DB_NAME=
  DB_PORT=1433
  ```

**Tarea 1.1.5: Configurar SASS básico (30 min)**
- [ ] Crear estructura SASS 7-1:
  ```bash
  mkdir -p src/public/sass/{abstracts,base,components,layout,pages,themes,vendors}
  touch src/public/sass/main.scss
  touch src/public/sass/abstracts/_variables.scss
  touch src/public/sass/base/_reset.scss
  ```

- [ ] Editar `src/public/sass/main.scss`:
  ```scss
  // Abstracts
  @import 'abstracts/variables';
  
  // Base
  @import 'base/reset';
  
  // Layout, components, pages... (agregar después)
  ```

- [ ] Editar `src/public/sass/abstracts/_variables.scss`:
  ```scss
  // Colores del proyecto
  $primary-color: #2c3e50;
  $secondary-color: #3498db;
  $success-color: #27ae60;
  $danger-color: #e74c3c;
  
  // Tipografía
  $font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  $font-size-base: 16px;
  ```

- [ ] Agregar script en `package.json`:
  ```json
  "scripts": {
    "sass": "sass src/public/sass/main.scss src/public/css/main.css --watch",
    "dev": "concurrently \"npm run sass\" \"nodemon src/server.js\""
  }
  ```

- [ ] Instalar concurrently: `pnpm add -D concurrently`

**Tarea 1.1.6: Crear vistas básicas (30 min)**
- [ ] Editar `src/views/layouts/main.ejs`:
  ```html
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %> - Portal Municipal</title>
    <link rel="stylesheet" href="/css/main.css">
  </head>
  <body>
    <header>
      <h1>Portal de Pagos Municipales</h1>
    </header>
    <main>
      <%- body %>
    </main>
    <footer>
      <p>&copy; 2025 Municipalidades de Córdoba</p>
    </footer>
  </body>
  </html>
  ```

- [ ] Crear `src/views/index.ejs`:
  ```html
  <div class="home-container">
    <h2><%= title %></h2>
    <p>Bienvenido al portal de pagos municipales.</p>
    <p>Sistema en desarrollo - Sprint 1</p>
  </div>
  ```

**Tarea 1.1.7: Probar setup inicial (15 min)**
- [ ] Ejecutar: `pnpm run dev`
- [ ] Abrir navegador en `http://localhost:3000`
- [ ] Verificar que:
  - La página carga sin errores
  - Se ve el layout con header y footer
  - Los estilos CSS se aplican
- [ ] Detener servidor (Ctrl+C)

**Tarea 1.1.8: Commit inicial (15 min)**
- [ ] Crear archivo `.env` con valores de desarrollo (NO commitearlo)
- [ ] Stage todos los archivos: `git add .`
- [ ] Commit: `git commit -m "feat: estructura inicial del proyecto con Express, EJS y SASS"`
- [ ] Crear repositorio en GitHub (si no existe)
- [ ] Agregar remote: `git remote add origin [URL-de-tu-repo]`
- [ ] Push: `git push -u origin main`

---

## 🗄️ FASE 2: Conexión Segura a Azure SQL

### Historia de Usuario 2.1
**Como desarrollador, quiero configurar la conexión segura a Azure SQL con Sequelize, para acceder a los datos compartidos con ALCALD+IA sin exponer credenciales.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Configurar Sequelize con credenciales seguras
  Given las credenciales de Azure SQL en variables de entorno
  When configuro Sequelize con el driver mysql2
  Then la conexión se establece sin errores
  And puedo ejecutar sequelize.authenticate() exitosamente

Scenario: Manejar errores de conexión
  Given credenciales inválidas o servidor no disponible
  When intento conectar a la base de datos
  Then se captura el error apropiadamente
  And se registra en logs sin exponer datos sensibles

Scenario: Inicializar Sequelize CLI
  Given la configuración de Sequelize lista
  When ejecuto comandos de Sequelize CLI
  Then puedo generar migraciones y modelos
  And los archivos se crean en la estructura correcta
```

#### Tareas Desglosadas (Puntos: 3)

**Tarea 2.1.1: Obtener credenciales de Azure SQL (20 min)**
- [ ] Acceder al portal de Azure (https://portal.azure.com)
- [ ] Navegar a tu instancia de Azure SQL Database
- [ ] Copiar los siguientes datos:
  - Host/Server name
  - Database name
  - Username
  - Password (o resetearla si no la tienes)
  - Port (usualmente 1433)
- [ ] Anotar estos datos en un lugar seguro (NO en Git)

**Tarea 2.1.2: Configurar variables de entorno (15 min)**
- [ ] Editar archivo `.env` (NO commitearlo):
  ```
  PORT=3000
  NODE_ENV=development
  
  # Azure SQL Database
  DB_HOST=tu-servidor.database.windows.net
  DB_USER=tu-usuario
  DB_PASSWORD=tu-password-segura
  DB_NAME=nombre-base-datos
  DB_PORT=1433
  DB_DIALECT=mysql
  ```

- [ ] Actualizar `.env.example` (SÍ commitearlo):
  ```
  PORT=3000
  NODE_ENV=development
  
  # Azure SQL Database
  DB_HOST=your-server.database.windows.net
  DB_USER=your-username
  DB_PASSWORD=your-password
  DB_NAME=your-database-name
  DB_PORT=1433
  DB_DIALECT=mysql
  ```

**Tarea 2.1.3: Configurar Sequelize (45 min)**
- [ ] Editar `src/config/database.js`:
  ```javascript
  require('dotenv').config();
  const { Sequelize } = require('sequelize');
  
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 1433,
      dialect: process.env.DB_DIALECT || 'mysql',
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      dialectOptions: {
        encrypt: true, // Importante para Azure SQL
        trustServerCertificate: false
      }
    }
  );
  
  // Función para probar la conexión
  const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('✅ Conexión a Azure SQL establecida exitosamente');
      return true;
    } catch (error) {
      console.error('❌ Error al conectar a Azure SQL:', error.message);
      return false;
    }
  };
  
  module.exports = { sequelize, testConnection };
  ```

- [ ] Actualizar `src/server.js` para probar conexión al iniciar:
  ```javascript
  require('dotenv').config();
  const app = require('./app');
  const { testConnection } = require('./config/database');
  
  const PORT = process.env.PORT || 3000;
  
  // Probar conexión DB antes de iniciar servidor
  testConnection().then(connected => {
    if (connected) {
      app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      });
    } else {
      console.error('⚠️ No se pudo conectar a la base de datos');
      process.exit(1);
    }
  });
  ```

**Tarea 2.1.4: Inicializar Sequelize CLI (30 min)**
- [ ] Crear archivo `.sequelizerc` en la raíz del proyecto:
  ```javascript
  const path = require('path');
  
  module.exports = {
    'config': path.resolve('src/config', 'database.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations')
  };
  ```

- [ ] Crear carpetas para migraciones y seeders:
  ```bash
  mkdir -p src/migrations src/seeders
  ```

- [ ] Crear archivo `src/models/index.js`:
  ```javascript
  const { sequelize } = require('../config/database');
  const { Sequelize } = require('sequelize');
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  // Aquí importaremos los modelos más adelante
  // db.Cliente = require('./Cliente')(sequelize, Sequelize);
  
  module.exports = db;
  ```

**Tarea 2.1.5: Crear test de conexión (30 min)**
- [ ] Instalar Jest para testing: `pnpm add -D jest`
- [ ] Agregar script en `package.json`:
  ```json
  "scripts": {
    "test": "jest",
    "test:db": "jest tests/database.test.js"
  }
  ```

- [ ] Crear `tests/database.test.js`:
  ```javascript
  const { sequelize, testConnection } = require('../src/config/database');
  
  describe('Database Connection', () => {
    test('should connect to Azure SQL successfully', async () => {
      const connected = await testConnection();
      expect(connected).toBe(true);
    });
    
    test('should have valid Sequelize instance', () => {
      expect(sequelize).toBeDefined();
      expect(sequelize.config.database).toBe(process.env.DB_NAME);
    });
    
    afterAll(async () => {
      await sequelize.close();
    });
  });
  ```

- [ ] Ejecutar test: `pnpm run test:db`
- [ ] Verificar que el test pasa ✅

**Tarea 2.1.6: Documentar configuración (20 min)**
- [ ] Actualizar `README.md` con sección de configuración:
  ```markdown
  ## Configuración de Base de Datos
  
  ### Prerequisitos
  - Acceso a Azure SQL Database
  - Credenciales válidas
  
  ### Setup
  1. Copiar `.env.example` a `.env`
  2. Completar variables de entorno con tus credenciales
  3. Ejecutar `pnpm run test:db` para verificar conexión
  
  ### Troubleshooting
  - Error de autenticación: Verificar usuario/password
  - Timeout: Verificar firewall de Azure SQL (agregar tu IP)
  - SSL: Asegurar `encrypt: true` en dialectOptions
  ```

- [ ] Commit: `git commit -am "feat: configuración de Sequelize con Azure SQL"`

---

## 📊 FASE 3: Mapeo Completo de Base de Datos

### Historia de Usuario 3.1
**Como desarrollador, quiero mapear completamente la base de datos con Sequelize según el diagrama ER, para modelar todas las entidades y relaciones necesarias para el portal.**

#### Criterios de Aceptación (Gherkin)
```gherkin
Scenario: Definir modelos principales
  Given el diagrama ER proporcionado
  When defino los modelos en Sequelize
  Then cada entidad tiene su archivo de modelo
  And los tipos de datos coinciden con la BD
  And las constraints están correctamente definidas

Scenario: Establecer asociaciones
  Given los modelos creados
  When defino las relaciones entre modelos
  Then las asociaciones reflejan el diagrama ER
  And se pueden hacer queries con includes
  And las foreign keys se crean correctamente

Scenario: Sincronizar con base de datos
  Given modelos y asociaciones definidos
  When ejecuto sync o migraciones
  Then las tablas se crean en Azure SQL
  And no hay errores de sincronización
  And puedo insertar datos de prueba
```

#### Tareas Desglosadas (Puntos: 4)

**Tarea 3.1.1: Analizar diagrama ER y planificar modelos (30 min)**
- [ ] Revisar el diagrama ER que subiste
- [ ] Identificar entidades principales:
  - CLIENTES (contribuyentes)
  - CLIENTESCTACTE (cuenta corriente/deudas)
  - PAGOS (registro de pagos)
  - Otras entidades relevantes del diagrama
  
- [ ] Crear documento `docs/database-mapping.md`:
  ```markdown
  # Mapeo de Base de Datos
  
  ## Entidades Principales
  
  ### CLIENTES
  - Codigo (PK, STRING)
  - Nombre (STRING)
  - Domicilio (STRING)
  - Telefono (STRING)
  - Email (STRING)
  - DNI (STRING, UNIQUE)
  - FechaAlta (DATE)
  
  ### CLIENTESCTACTE
  - Id (PK, INTEGER, AUTO_INCREMENT)
  - CodigoCliente (FK -> CLIENTES)
  - Concepto (STRING) - Tipo de deuda
  - Monto (DECIMAL)
  - FechaVencimiento (DATE)
  - Estado (ENUM: 'pendiente', 'pagado', 'vencido')
  - Intereses (DECIMAL)
  
  ### PAGOS
  - Id (PK, INTEGER, AUTO_INCREMENT)
  - CtaCteId (FK -> CLIENTESCTACTE)
  - MontoPagado (DECIMAL)
  - FechaPago (DATE)
  - MetodoPago (ENUM: 'mercadopago', 'naranjax', 'bna')
  - ReferenciaExterna (STRING) - ID del QR/transacción
  - Estado (ENUM: 'pendiente', 'confirmado', 'fallido')
  
  ## Relaciones
  - CLIENTES ||--o{ CLIENTESCTACTE
  - CLIENTESCTACTE ||--o{ PAGOS
  ```

**Tarea 3.1.2: Crear modelo Cliente (45 min)**
- [ ] Crear `src/models/Cliente.js`:
  ```javascript
  module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      codigo: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      domicilio: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      dni: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      fechaAlta: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      tableName: 'CLIENTES',
      timestamps: false
    });
    
    Cliente.associate = (models) => {
      Cliente.hasMany(models.ClienteCtaCte, {
        foreignKey: 'codigoCliente',
        as: 'cuentaCorriente'
      });
    };
    
    return Cliente;
  };
  ```

**Tarea 3.1.3: Crear modelo ClienteCtaCte (45 min)**
- [ ] Crear `src/models/ClienteCtaCte.js`:
  ```javascript
  module.exports = (sequelize, DataTypes) => {
    const ClienteCtaCte = sequelize.define('ClienteCtaCte', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      codigoCliente: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: 'CLIENTES',
          key: 'codigo'
        }
      },
      concepto: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'Tipo de deuda: Tasa Municipal, Automotor, etc.'
      },
      monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      estado: {
        type: DataTypes.ENUM('pendiente', 'pagado', 'vencido'),
        allowNull: false,
        defaultValue: 'pendiente'
      },
      intereses: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0
      }
    }, {
      tableName: 'CLIENTESCTACTE',
      timestamps: true,
      createdAt: 'fechaCreacion',
      updatedAt: 'fechaActualizacion'
    });
    
    ClienteCtaCte.associate = (models) => {
      ClienteCtaCte.belongsTo(models.Cliente, {
        foreignKey: 'codigoCliente',
        as: 'cliente'
      });
      
      ClienteCtaCte.hasMany(models.Pago, {
        foreignKey: 'ctaCteId',
        as: 'pagos'
      });
    };
    
    return ClienteCtaCte;
  };
  ```

**Tarea 3.1.4: Crear modelo Pago (45 min)**
- [ ] Crear `src/models/Pago.js`:
  ```javascript
  module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define('Pago', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ctaCteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CLIENTESCTACTE',
          key: 'id'
        }
      },
      montoPagado: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      fechaPago: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      metodoPago: {
        type: DataTypes.ENUM('mercadopago', 'naranjax', 'bna', 'otro'),
        allowNull: false
      },
      referenciaExterna: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'ID de transacción de la fintech'
      },
      estado: {
        type: DataTypes.ENUM('pendiente', 'confirmado', 'fallido'),
        allowNull: false,
        defaultValue: 'pendiente'
      }
    }, {
      tableName: 'PAGOS',
      timestamps: true,
      createdAt: 'fechaCreacion',
      updatedAt: 'fechaActualizacion'
    });
    
    Pago.associate = (models) => {
      Pago.belongsTo(models.ClienteCtaCte, {
        foreignKey: 'ctaCteId',
        as: 'cuentaCorriente'
      });
    };
    
    return Pago;
  };
  ```

**Tarea 3.1.5: Actualizar index de modelos (30 min)**
- [ ] Editar `src/models/index.js`:
  ```javascript
  const { sequelize } = require('../config/database');
  const { Sequelize } = require('sequelize');
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  // Importar modelos
  db.Cliente = require('./Cliente')(sequelize, Sequelize);
  db.ClienteCtaCte = require('./ClienteCtaCte')(sequelize, Sequelize);
  db.Pago = require('./Pago')(sequelize, Sequelize);
  
  // Establecer asociaciones
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  module.exports = db;
  ```

**Tarea 3.1.6: Crear migración inicial (45 min)**
- [ ] Generar migración:
  ```bash
  npx sequelize-cli migration:generate --name create-initial-tables
  ```

- [ ] Editar el archivo de migración generado en `src/migrations/`:
  ```javascript
  'use strict';
  
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Crear tabla CLIENTES
      await queryInterface.createTable('CLIENTES', {
        codigo: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          allowNull: false
        },
        nombre: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        domicilio: {
          type: Sequelize.STRING(200),
          allowNull: true
        },
        telefono: {
          type: Sequelize.STRING(20),
          allowNull: true
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true
        },
        dni: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true
        },
        fechaAlta: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
      
      // Crear tabla CLIENTESCTACTE
      await queryInterface.createTable('CLIENTESCTACTE', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        codigoCliente: {
          type: Sequelize.STRING(20),
          allowNull: false,
          references: {
            model: 'CLIENTES',
            key: 'codigo'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        concepto: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        monto: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
        },
        fechaVencimiento: {
          type: Sequelize.DATE,
          allowNull: false
        },
        estado: {
          type: Sequelize.ENUM('pendiente', 'pagado', 'vencido'),
          allowNull: false,
          defaultValue: 'pendiente'
        },
        intereses: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
          defaultValue: 0
        },
        fechaCreacion: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        fechaActualizacion: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
      
      // Crear tabla PAGOS
      await queryInterface.createTable('PAGOS', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        ctaCteId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'CLIENTESCTACTE',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        montoPagado: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
        },
        fechaPago: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        metodoPago: {
          type: Sequelize.ENUM('mercadopago', 'naranjax', 'bna', 'otro'),
          allowNull: false
        },
        referenciaExterna: {
          type: Sequelize.STRING(100),
          allowNull: true
        },
        estado: {
          type: Sequelize.ENUM('pendiente', 'confirmado', 'fallido'),
          allowNull: false,
          defaultValue: 'pendiente'
        },
        fechaCreacion: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        fechaActualizacion: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
      
      // Crear índices
      await queryInterface.addIndex('CLIENTES', ['dni']);
      await queryInterface.addIndex('CLIENTESCTACTE', ['codigoCliente']);
      await queryInterface.addIndex('CLIENTESCTACTE', ['estado']);
      await queryInterface.addIndex('PAGOS', ['ctaCteId']);
    },
    
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('PAGOS');
      await queryInterface.dropTable('CLIENTESCTACTE');
      await queryInterface.dropTable('CLIENTES');
    }
  };
  ```

**Tarea 3.1.7: Ejecutar migración (20 min)**
- [ ] Ejecutar migración:
  ```bash
  npx sequelize-cli db:migrate
  ```

- [ ] Verificar en Azure SQL que las tablas se crearon
- [ ] Si hay errores, revisar los logs y corregir
- [ ] Documentar cualquier issue en `docs/migration-notes.md`

**Tarea 3.1.8: Crear seeders de prueba (45 min)**
- [ ] Generar seeder:
  ```bash
  npx sequelize-cli seed:generate --name demo-data
  ```

- [ ] Editar el seeder en `src/seeders/`:
  ```javascript
  'use strict';
  
  module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Insertar clientes de prueba
      await queryInterface.bulkInsert('CLIENTES', [
        {
          codigo: 'CLI001',
          nombre: 'Juan Pérez',
          domicilio: 'Av. Colón 123',
          telefono: '3515551234',
          email: 'juan.perez@example.com',
          dni: '12345678',
          fechaAlta: new Date()
        },
        {
          codigo: 'CLI002',
          nombre: 'María González',
          domicilio: 'Calle Falsa 456',
          telefono: '3515555678',
          email: 'maria.gonzalez@example.com',
          dni: '87654321',
          fechaAlta: new Date()
        }
      ]);
      
      // Insertar deudas de prueba
      await queryInterface.bulkInsert('CLIENTESCTACTE', [
        {
          codigoCliente: 'CLI001',
          concepto: 'Tasa Municipal',
          monto: 5000.00,
          fechaVencimiento: new Date('2025-12-31'),
          estado: 'pendiente',
          intereses: 0,
          fechaCreacion: new Date(),
          fechaActualizacion: new Date()
        },
        {
          codigoCliente: 'CLI001',
          concepto: 'Automotor',
          monto: 12000.00,
          fechaVencimiento: new Date('2025-11-30'),
          estado: 'vencido',
          intereses: 500.00,
          fechaCreacion: new Date(),
          fechaActualizacion: new Date()
        },
        {
          codigoCliente: 'CLI002',
          concepto: 'Comercio',
          monto: 8000.00,
          fechaVencimiento: new Date('2026-01-15'),
          estado: 'pendiente',
          intereses: 0,
          fechaCreacion: new Date(),
          fechaActualizacion: new Date()
        }
      ]);
    },
    
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('CLIENTESCTACTE', null, {});
      await queryInterface.bulkDelete('CLIENTES', null, {});
    }
  };
  ```

- [ ] Ejecutar seeder:
  ```bash
  npx sequelize-cli db:seed:all
  ```

**Tarea 3.1.9: Crear tests de modelos (60 min)**
- [ ] Crear `tests/models.test.js`:
  ```javascript
  const db = require('../src/models');
  
  describe('Database Models', () => {
    beforeAll(async () => {
      // Sincronizar base de datos en modo test
      await db.sequelize.sync({ force: true });
    });
    
    describe('Cliente Model', () => {
      test('should create a new cliente', async () => {
        const cliente = await db.Cliente.create({
          codigo: 'TEST001',
          nombre: 'Test Usuario',
          dni: '99999999',
          fechaAlta: new Date()
        });
        
        expect(cliente.codigo).toBe('TEST001');
        expect(cliente.nombre).toBe('Test Usuario');
      });
      
      test('should not allow duplicate DNI', async () => {
        await expect(async () => {
          await db.Cliente.create({
            codigo: 'TEST002',
            nombre: 'Otro Usuario',
            dni: '99999999', // DNI duplicado
            fechaAlta: new Date()
          });
        }).rejects.toThrow();
      });
    });
    
    describe('ClienteCtaCte Model', () => {
      test('should create cuenta corriente linked to cliente', async () => {
        const ctacte = await db.ClienteCtaCte.create({
          codigoCliente: 'TEST001',
          concepto: 'Test Deuda',
          monto: 1000.00,
          fechaVencimiento: new Date('2026-12-31'),
          estado: 'pendiente'
        });
        
        expect(ctacte.concepto).toBe('Test Deuda');
        expect(parseFloat(ctacte.monto)).toBe(1000.00);
      });
    });
    
    describe('Associations', () => {
      test('should load cliente with cuenta corriente', async () => {
        const cliente = await db.Cliente.findOne({
          where: { codigo: 'TEST001' },
          include: [{
            model: db.ClienteCtaCte,
            as: 'cuentaCorriente'
          }]
        });
        
        expect(cliente.cuentaCorriente).toBeDefined();
        expect(cliente.cuentaCorriente.length).toBeGreaterThan(0);
      });
    });
    
    afterAll(async () => {
      await db.sequelize.close();
    });
  });
  ```

- [ ] Ejecutar tests: `pnpm test`
- [ ] Verificar que todos pasan ✅
- [ ] Ajustar si hay fallos

**Tarea 3.1.10: Documentar mapeo completo (30 min)**
- [ ] Actualizar `docs/database-mapping.md` con:
  - Diagramas de relaciones
  - Explicación de cada modelo
  - Ejemplos de queries comunes
  - Notas sobre constraints y validaciones

- [ ] Actualizar README con sección de modelos:
  ```markdown
  ## Modelos de Base de Datos
  
  ### Entidades
  - **Cliente**: Información de contribuyentes
  - **ClienteCtaCte**: Deudas y cuenta corriente
  - **Pago**: Registro de pagos realizados
  
  ### Relaciones
  - Un Cliente tiene muchas cuentas corrientes
  - Una cuenta corriente pertenece a un Cliente
  - Una cuenta corriente puede tener muchos Pagos
  
  ### Migraciones
  - Ejecutar: `npx sequelize-cli db:migrate`
  - Revertir: `npx sequelize-cli db:migrate:undo`
  
  ### Seeders
  - Cargar datos de prueba: `npx sequelize-cli db:seed:all`
  - Limpiar: `npx sequelize-cli db:seed:undo:all`
  ```

- [ ] Commit final de la fase:
  ```bash
  git add .
  git commit -m "feat: mapeo completo de BD con modelos, migraciones y tests"
  git push
  ```

---

## 📝 RETROSPECTIVA DEL SPRINT 1

### Checklist de Cierre
- [ ] Todas las tareas completadas o justificadas si no
- [ ] Tests pasando al 100%
- [ ] Código commiteado y pusheado a GitHub
- [ ] README actualizado con toda la configuración
- [ ] Board de Trello actualizado

### Preguntas de Retrospectiva
Responde estas preguntas para mejorar el próximo sprint:

1. **¿Qué funcionó bien?**
   - (Anota aquí qué tareas fueron más fluidas)

2. **¿Qué no funcionó?**
   - (Anota problemas, bloqueos, frustraciones)

3. **¿Qué aprendiste?**
   - (Nuevos conocimientos técnicos, mejores prácticas)

4. **¿Qué mejorarías para el Sprint 2?**
   - (Sugerencias de proceso, estimaciones, herramientas)

5. **¿Cómo te ayudó la IA (Copilot/Claude)?**
   - (% de código generado, tiempo ahorrado, calidad)

### Métricas del Sprint
- **Puntos planificados**: 12-15
- **Puntos completados**: ___
- **Velocity**: ___
- **Bugs encontrados**: ___
- **Tests creados**: ___
- **Cobertura de tests**: ___%

### Preparación para Sprint 2
- [ ] Usar el agente MCP de Trello para crear tareas del Sprint 2
- [ ] Revisar backlog y ajustar prioridades si es necesario
- [ ] Estimar tareas del Sprint 2 basándose en velocity del Sprint 1
- [ ] Planificar fecha de inicio del Sprint 2

---

## 🤖 FORMATO PARA AGENTE MCP DE TRELLO

> **Instrucciones**: Copia esta sección completa y pégala en tu chat con el agente MCP configurado. El agente debe crear automáticamente todas las tarjetas en tu board de Trello.

### Configuración del Board
- **Board**: Portal Municipal de Pagos
- **Listas**: Backlog, To-Do, In Progress, Review, Done
- **Sprint Actual**: Sprint 1 - Configuración Base y Conexión BD
- **Duración**: 1 semana

### Tarjetas a Crear

#### Tarjeta 1: [FASE 0.1] Configurar GitHub Copilot
- **Lista**: To-Do
- **Labels**: Must-Have, 2 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero configurar GitHub Copilot en VSCode
  
  Criterios de Aceptación:
  - Copilot instalado y funcionando
  - Puedo ver sugerencias de código
  - Tengo documentado el upgrade path a Copilot Pro
  ```
- **Checklist**:
  - [ ] Instalar extensión GitHub Copilot (30 min)
  - [ ] Probar funcionalidad básica (15 min)
  - [ ] Documentar upgrade path (15 min)

#### Tarjeta 2: [FASE 0.2] Configurar MCP en VSCode
- **Lista**: To-Do
- **Labels**: Must-Have, 2 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero configurar MCP en VSCode
  
  Criterios de Aceptación:
  - MCP configurado correctamente
  - Puedo usar comandos MCP en Copilot Chat
  - Configuración documentada
  ```
- **Checklist**:
  - [ ] Verificar versión de Copilot (10 min)
  - [ ] Crear archivo de configuración MCP (20 min)
  - [ ] Probar MCP básico (15 min)

#### Tarjeta 3: [FASE 0.3] Configurar servidor MCP de Trello
- **Lista**: To-Do
- **Labels**: Must-Have, 3 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero configurar servidor MCP de Trello
  
  Criterios de Aceptación:
  - Servidor MCP de Trello conectado
  - Puedo listar boards desde VSCode/Claude
  - Puedo crear tarjetas de prueba
  ```
- **Checklist**:
  - [ ] Obtener credenciales de Trello (20 min)
  - [ ] Instalar servidor MCP de Trello (30 min)
  - [ ] Verificar conexión con Trello (20 min)
  - [ ] Documentar el proceso (15 min)

#### Tarjeta 4: [FASE 0.4] Crear agente MCP para gestión de tareas
- **Lista**: To-Do
- **Labels**: Must-Have, 2 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero crear agente MCP para Trello
  
  Criterios de Aceptación:
  - Board creado con estructura correcta
  - Template de prompts documentado
  - Agente probado con tarea de ejemplo
  ```
- **Checklist**:
  - [ ] Crear estructura del board (30 min)
  - [ ] Crear prompt template (45 min)
  - [ ] Probar agente con tarea real (30 min)
  - [ ] Preparar para migración automática (20 min)

#### Tarjeta 5: [FASE 1.1] Estructura del Proyecto MVC
- **Lista**: To-Do
- **Labels**: Must-Have, 3 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero estructura MVC del proyecto
  
  Criterios de Aceptación:
  - Estructura de carpetas completa
  - Express configurado con EJS y SASS
  - Servidor

  arranca sin errores
  - Git inicializado con commit
  ```
- **Checklist**:
  - [ ] Inicializar repositorio y configuración base (30 min)
  - [ ] Instalar dependencias principales (20 min)
  - [ ] Crear estructura completa de carpetas (45 min)
  - [ ] Configurar servidor Express básico (45 min)
  - [ ] Configurar SASS básico (30 min)
  - [ ] Crear vistas básicas (30 min)
  - [ ] Probar setup inicial (15 min)
  - [ ] Commit inicial (15 min)

#### Tarjeta 6: [FASE 2.1] Conexión Segura a Azure SQL
- **Lista**: To-Do
- **Labels**: Must-Have, 3 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero configurar conexión a Azure SQL
  
  Criterios de Aceptación:
  - Sequelize configurado con credenciales seguras
  - Conexión establecida exitosamente
  - Tests de conexión pasando
  - Sequelize CLI inicializado
  ```
- **Checklist**:
  - [ ] Obtener credenciales de Azure SQL (20 min)
  - [ ] Configurar variables de entorno (15 min)
  - [ ] Configurar Sequelize (45 min)
  - [ ] Inicializar Sequelize CLI (30 min)
  - [ ] Crear test de conexión (30 min)
  - [ ] Documentar configuración (20 min)

#### Tarjeta 7: [FASE 3.1] Mapeo Completo de Base de Datos
- **Lista**: To-Do
- **Labels**: Must-Have, 4 puntos
- **Descripción**:
  ```
  Como desarrollador, quiero mapear toda la BD con Sequelize
  
  Criterios de Aceptación:
  - Todos los modelos creados (Cliente, ClienteCtaCte, Pago)
  - Asociaciones configuradas correctamente
  - Migraciones ejecutadas sin errores
  - Seeders de prueba funcionando
  - Tests de modelos pasando
  ```
- **Checklist**:
  - [ ] Analizar diagrama ER y planificar modelos (30 min)
  - [ ] Crear modelo Cliente (45 min)
  - [ ] Crear modelo ClienteCtaCte (45 min)
  - [ ] Crear modelo Pago (45 min)
  - [ ] Actualizar index de modelos (30 min)
  - [ ] Crear migración inicial (45 min)
  - [ ] Ejecutar migración (20 min)
  - [ ] Crear seeders de prueba (45 min)
  - [ ] Crear tests de modelos (60 min)
  - [ ] Documentar mapeo completo (30 min)

---

### Prompt Completo para el Agente MCP

**Copia y pega esto directamente en tu chat con el agente MCP configurado:**

```
Hola, necesito que crees tarjetas en mi board de Trello "Portal Municipal de Pagos" basándote en el Sprint 1 de mi proyecto.

CONFIGURACIÓN DEL BOARD:
- Board: Portal Municipal de Pagos
- Listas disponibles: Backlog, To-Do, In Progress, Review, Done
- Labels: Must-Have (rojo), Should-Have (amarillo), Could-Have (verde), Puntos: 1, 2, 3, 4, 5

INSTRUCCIONES:
Crea las siguientes 7 tarjetas en la lista "To-Do":

---

TARJETA 1: [FASE 0.1] Configurar GitHub Copilot
Labels: Must-Have, 2 puntos
Descripción:
"""
Como desarrollador, quiero configurar GitHub Copilot en VSCode

Criterios de Aceptación:
✅ Copilot instalado y funcionando
✅ Puedo ver sugerencias de código
✅ Tengo documentado el upgrade path a Copilot Pro
"""

Checklist:
- Instalar extensión GitHub Copilot (30 min)
- Probar funcionalidad básica (15 min)
- Documentar upgrade path (15 min)

---

TARJETA 2: [FASE 0.2] Configurar MCP en VSCode
Labels: Must-Have, 2 puntos
Descripción:
"""
Como desarrollador, quiero configurar MCP en VSCode

Criterios de Aceptación:
✅ MCP configurado correctamente
✅ Puedo usar comandos MCP en Copilot Chat
✅ Configuración documentada
"""

Checklist:
- Verificar versión de Copilot (10 min)
- Crear archivo de configuración MCP (20 min)
- Probar MCP básico (15 min)

---

TARJETA 3: [FASE 0.3] Configurar servidor MCP de Trello
Labels: Must-Have, 3 puntos
Descripción:
"""
Como desarrollador, quiero configurar servidor MCP de Trello

Criterios de Aceptación:
✅ Servidor MCP de Trello conectado
✅ Puedo listar boards desde VSCode/Claude
✅ Puedo crear tarjetas de prueba
"""

Checklist:
- Obtener credenciales de Trello (20 min)
- Instalar servidor MCP de Trello (30 min)
- Verificar conexión con Trello (20 min)
- Documentar el proceso (15 min)

---

TARJETA 4: [FASE 0.4] Crear agente MCP para gestión de tareas
Labels: Must-Have, 2 puntos
Descripción:
"""
Como desarrollador, quiero crear agente MCP para Trello

Criterios de Aceptación:
✅ Board creado con estructura correcta
✅ Template de prompts documentado
✅ Agente probado con tarea de ejemplo
"""

Checklist:
- Crear estructura del board (30 min)
- Crear prompt template (45 min)
- Probar agente con tarea real (30 min)
- Preparar para migración automática (20 min)

---

TARJETA 5: [FASE 1.1] Estructura del Proyecto MVC
Labels: Must-Have, 3 puntos
Descripción:
"""
Como desarrollador, quiero estructura MVC del proyecto

Criterios de Aceptación:
✅ Estructura de carpetas completa
✅ Express configurado con EJS y SASS
✅ Servidor arranca sin errores
✅ Git inicializado con commit
"""

Checklist:
- Inicializar repositorio y configuración base (30 min)
- Instalar dependencias principales (20 min)
- Crear estructura completa de carpetas (45 min)
- Configurar servidor Express básico (45 min)
- Configurar SASS básico (30 min)
- Crear vistas básicas (30 min)
- Probar setup inicial (15 min)
- Commit inicial (15 min)

---

TARJETA 6: [FASE 2.1] Conexión Segura a Azure SQL
Labels: Must-Have, 3 puntos
Descripción:
"""
Como desarrollador, quiero configurar conexión a Azure SQL

Criterios de Aceptación:
✅ Sequelize configurado con credenciales seguras
✅ Conexión establecida exitosamente
✅ Tests de conexión pasando
✅ Sequelize CLI inicializado
"""

Checklist:
- Obtener credenciales de Azure SQL (20 min)
- Configurar variables de entorno (15 min)
- Configurar Sequelize (45 min)
- Inicializar Sequelize CLI (30 min)
- Crear test de conexión (30 min)
- Documentar configuración (20 min)

---

TARJETA 7: [FASE 3.1] Mapeo Completo de Base de Datos
Labels: Must-Have, 4 puntos
Descripción:
"""
Como desarrollador, quiero mapear toda la BD con Sequelize

Criterios de Aceptación:
✅ Todos los modelos creados (Cliente, ClienteCtaCte, Pago)
✅ Asociaciones configuradas correctamente
✅ Migraciones ejecutadas sin errores
✅ Seeders de prueba funcionando
✅ Tests de modelos pasando
"""

Checklist:
- Analizar diagrama ER y planificar modelos (30 min)
- Crear modelo Cliente (45 min)
- Crear modelo ClienteCtaCte (45 min)
- Crear modelo Pago (45 min)
- Actualizar index de modelos (30 min)
- Crear migración inicial (45 min)
- Ejecutar migración (20 min)
- Crear seeders de prueba (45 min)
- Crear tests de modelos (60 min)
- Documentar mapeo completo (30 min)

---

Por favor crea todas estas tarjetas y confirma cuando estén listas. Gracias!
```

---

## 📊 RESUMEN EJECUTIVO DEL SPRINT 1

### Puntos Totales por Fase
| Fase | Historias | Puntos | Tiempo Estimado |
|------|-----------|--------|-----------------|
| FASE 0: Herramientas | 4 historias | 9 puntos | 2 días |
| FASE 1: Estructura MVC | 1 historia | 3 puntos | 1 día |
| FASE 2: Conexión Azure SQL | 1 historia | 3 puntos | 1 día |
| FASE 3: Mapeo BD | 1 historia | 4 puntos | 1.5 días |
| **TOTAL** | **7 historias** | **19 puntos** | **5.5 días** |

### Nota sobre Estimaciones
Los puntos originales (12-15) se ajustaron a 19 puntos tras desglosar todas las tareas. Esto es normal en sprints fundacionales. Si sientes que es mucho:

**Opciones de ajuste:**
1. **Mantener todo**: Es ambicioso pero factible con las 7 días hábiles
2. **Reducir FASE 0**: Si ya tienes Copilot configurado, puedes empezar directo en FASE 1
3. **Extender sprint**: A 10 días calendario (2 semanas) si prefieres ritmo más tranquilo

### Dependencias Críticas
```
FASE 0 (Herramientas)
    ↓
FASE 1 (Estructura) ← Puede empezar en paralelo con FASE 0.4
    ↓
FASE 2 (Conexión DB) ← Requiere FASE 1 completa
    ↓
FASE 3 (Mapeo BD) ← Requiere FASE 2 completa
```

### Consejos para Ejecutar el Sprint

**Día 1-2: FASE 0 (Herramientas)**
- Prioridad máxima: Configurar todo el entorno
- Si MCP no funciona en Copilot gratuito, usa Claude Desktop
- No avances hasta tener el agente MCP funcionando

**Día 3: FASE 1 (Estructura)**
- Usa Copilot intensivamente aquí para generar boilerplate
- Valida que el servidor arranca antes de continuar
- Commit frecuente

**Día 4: FASE 2 (Conexión)**
- Ten las credenciales de Azure listas antes de empezar
- Si hay problemas de firewall, resuélvelos primero
- Los tests deben pasar antes de seguir

**Día 5-6: FASE 3 (Mapeo)**
- La parte más larga pero crucial
- No apresures las migraciones
- Los seeders te ahorrarán tiempo después

**Día 7: Buffer y Retrospectiva**
- Terminar pendientes
- Ejecutar todos los tests
- Hacer retrospectiva
- Preparar Sprint 2

---

## 🎯 CHECKLIST FINAL ANTES DE EMPEZAR

Antes de comenzar el Sprint 1, verifica que tienes:

### Prerequisitos Técnicos
- [ ] VSCode instalado y actualizado
- [ ] Node.js instalado (versión 18+ recomendada)
- [ ] pnpm instalado globalmente (`npm install -g pnpm`)
- [ ] Git instalado y configurado
- [ ] Cuenta de GitHub activa

### Accesos y Credenciales
- [ ] Acceso a Azure Portal
- [ ] Credenciales de Azure SQL Database (o forma de obtenerlas)
- [ ] Cuenta de Trello activa
- [ ] GitHub Copilot activado (aunque sea versión gratuita)

### Conocimiento Base
- [ ] Entiendes el backlog del proyecto
- [ ] Has leído las secciones de arquitectura (sección 3 del backlog)
- [ ] Conoces el diagrama ER de la base de datos
- [ ] Tienes este Sprint 1 impreso o en pantalla secundaria

### Preparación Mental 😊
- [ ] Tienes tiempo dedicado (mínimo 4 horas/día)
- [ ] Entorno de trabajo cómodo
- [ ] Mentalidad de aprendizaje (no perfeccionismo)
- [ ] Listo para pedir ayuda si te atascas

---

## 🆘 PLAN DE CONTINGENCIA

### Si te atascas en FASE 0 (MCP)
**Problema**: MCP no funciona en Copilot gratuito
**Solución**:
1. Instala Claude Desktop (gratis)
2. Configura MCP allí (más documentado)
3. Usa Copilot solo para código
4. Usa Claude Desktop para gestión de Trello

### Si Azure SQL da problemas
**Problema**: No puedes conectar a Azure SQL
**Solución**:
1. Verifica firewall (agrega tu IP en Azure Portal)
2. Mientras tanto, usa SQLite local para desarrollo
3. Ajusta Sequelize dialect a 'sqlite' temporalmente
4. Retoma Azure cuando resuelvas el acceso

### Si las estimaciones son muy largas
**Problema**: Las tareas toman más tiempo del estimado
**Solución**:
1. NO te frustres - es normal en sprints fundacionales
2. Documenta el tiempo real para ajustar Sprint 2
3. Pide ayuda a Copilot/Claude más frecuentemente
4. Prioriza MUST del MVP: FASES 1, 2, 3 antes que herramientas extras

### Si encuentras bugs en el código generado
**Problema**: El código de este sprint tiene errores
**Solución**:
1. Lee los logs de error completos
2. Usa Copilot para debugging: "Este error [pega error], ¿cómo lo soluciono?"
3. Busca en documentación oficial (Sequelize, Express)
4. Documenta la solución en tu README

---

## 📝 NOTAS FINALES

### Para pegar este documento con el anterior
1. Copia TODO este contenido
2. Ábrelo en tu editor
3. Pega al final del archivo que descargaste antes
4. Guarda como `SPRINT-1.md`
5. Ya tienes el sprint completo

### Siguientes Pasos
Una vez termines el Sprint 1:
1. Completa la retrospectiva (sección incluida)
2. Actualiza el board de Trello moviendo tarjetas a "Done"
3. Calcula tu velocity real
4. Prepárate para Sprint 2 (que crearemos juntos después)

### Cómo usar el agente MCP
Cuando tengas MCP configurado:
1. Copia la sección "Prompt Completo para el Agente MCP" (más arriba)
2. Pégala en tu chat con el agente
3. Verifica que las tarjetas se crearon correctamente
4. Ajusta manualmente si algo falla

---

**¡Mucha suerte con el Sprint 1, Dante!** 🚀

Recuerda: Este sprint es fundacional. Tomará tiempo, pero cada hora invertida aquí te ahorrará días después. No te apresures, usa la IA como tu copiloto, y disfruta del proceso de construcción.

Cuando termines este sprint, vuelve y hagamos juntos el Sprint 2 (que será más rápido porque ya tendrás todo el setup listo).

**¿Alguna duda antes de empezar?** Puedes preguntarme lo que sea. Estoy aquí para apoyarte. 💪