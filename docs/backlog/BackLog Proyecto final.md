# Backlog del Proyecto: Portal de Pagos Digitales para Municipalidades y Comunas en el Interior de Córdoba, Argentina

## Índice del Backlog

1. **Visión del Proyecto y Objetivos**  
   Define el propósito del portal como complemento digital a ALCALD+ÍA, beneficios para municipalidades y contribuyentes, alcance MVP (consulta deudas, QR, sincronización Azure) y visión futura (autenticación, dashboard, notificaciones).

2. **Requerimientos Generales**  
   Detalla funcionalidades clave para MVP (consulta por DNI, generación QR, registro pagos) y extendidas (autenticación, histórico, multi-municipalidad), junto con restricciones técnicas (seguridad, escalabilidad) y de negocio (cumplimiento regulatorio, no alteración de ALCALD+ÍA).

3. **Arquitectura y Tecnologías**  
   Describe tecnologías principales (Node.js/Express backend, Azure SQL DB, EJS/SASS frontend), integraciones externas (fintechs como Mercado Pago), organización del proyecto (estructura MVC avanzado) y herramientas clave (pnpm, Sequelize, GitHub Copilot).

4. **Épicas e Historias de Usuario**  
   Organiza épicas (conexión DB, visualización deudas, QR, registro pagos, autenticación, dashboard, notificaciones) con historias en formato "Como [rol], quiero [acción], para [beneficio]", incluyendo tareas técnicas e integración IA natural.

5. **Criterios de Aceptación**  
   Proporciona criteria en estilo Gherkin (Given-When-Then) para cada historia, definiendo "done" (código/test/deploy/docs) y enfatizando testabilidad con soporte IA.

6. **Priorización MoSCoW**  
   Clasifica épicas en Must-Have (MVP core), Should-Have (autenticación), Could-Have (dashboard/notificaciones) y Won't-Have (integraciones avanzadas), con justificación, dependencias, impacto en sprints y métricas.

7. **Planificación Temporal**  
   Estructura sprints de 1-2 semanas con estimaciones en puntos (1-5), tareas detalladas por épica, dependencias, mini-proyectos y outputs; integra IA para refinamientos, totalizando 6-8 semanas para MVP.

8. **Riesgos y Mitigaciones**  
   Matriz categorizada (técnicos, negocio, regulatorios, operativos) con probabilidad/impacto, descripciones, pasos accionables (e.g., audits IA), responsables y métricas; incluye estrategias generales como monitoreo y contingencias.

9. **Documentación y Seguimiento**  
   Cubre tipos (requisitos, ADR, código), procesos (Kanban en Trello, GitHub workflow), métricas de calidad y mejora continua; integra IA para generación (prompts, Copilot) y archivado/versionado (git tags, backups Azure).


---
## Desarrollo
---

## 1. Visión del Proyecto y Objetivos

### 1.1. Propósito del Portal de Pagos

El Portal de Pagos Municipales es un módulo web independiente y complementario al software de gestión administrativa ALCALD+ÍA, desarrollado por el Sr. Contador Público Eduardo Daniel Ferreyra. Su propósito principal es empoderar a los contribuyentes de pequeñas comunas y municipalidades en el interior de Córdoba, permitiéndoles cumplir con sus obligaciones fiscales de manera digital, accesible, segura y eficiente, sin interferir en las operaciones internas de ALCALD+ÍA.

El portal se enfoca en:
- **Consulta digital de deudas**: Acceso rápido a categorías como tasas municipales, automotores, comercio, obras privadas, multas y otros conceptos definidos por cada entidad local, con énfasis en transparencia y usabilidad.
- **Pago online mediante QR dinámico**: Generación de códigos QR compatibles con fintechs argentinas populares como Mercado Pago y Naranja X (para el MVP inicial), extendible a BNA+ en fases posteriores. El portal no maneja fondos directamente, sino que actúa como orquestador, asegurando compatibilidad con múltiples wallets digitales en pesos argentinos (ARS).
- **Sincronización automática con la base de datos compartida en Azure SQL**: Los pagos confirmados se registran en tiempo real, reflejándose en ALCALD+ÍA para que los empleados municipales accedan a datos actualizados sin duplicación de esfuerzos.
- **Diseño mobile-first**: Priorizando el acceso desde dispositivos móviles (celulares), con responsividad para desktops, reconociendo que la mayoría de los usuarios en localidades rurales prefieren esta modalidad para mayor comodidad.

**Nota clave**: El portal comparte exclusivamente la base de datos con ALCALD+ÍA para mantener la integridad de los datos, pero opera como una capa externa orientada al contribuyente. No altera ni sustituye las funcionalidades internas de ALCALD+ÍA, cumpliendo estrictamente con regulaciones argentinas como la Ley de Protección de Datos Personales (Ley 25.326), normativas AFIP para transacciones digitales y estándares de seguridad para pagos electrónicos. Esto garantiza un enfoque ético y legal, integrando principios de IA de forma natural para optimizar procesos como la generación de requisitos y validaciones durante el desarrollo.

### 1.2. Beneficios Esperados

El portal no solo resuelve pain points actuales en la recaudación municipal, sino que transforma la interacción entre contribuyentes y entidades locales en una experiencia moderna y confiable.

#### Para las Municipalidades y Comunas:
- **Aumento en la recaudación eficiente**: Facilita pagos digitales sin necesidad de intermediarios físicos, reduciendo morosidad y costos operativos asociados a cobros manuales.
- **Mayor transparencia y trazabilidad**: Registros en tiempo real permiten un seguimiento preciso de ingresos, minimizando errores y habilitando auditorías simplificadas.
- **Optimización de recursos humanos**: Disminuye la carga administrativa para empleados, liberándolos de tareas repetitivas como el registro manual de pagos, y permite enfocarse en análisis estratégicos.
- **Escalabilidad local**: Diseñado para adaptarse a múltiples municipalidades en un mismo sistema, fomentando colaboración regional en Córdoba sin complejidades técnicas excesivas.

#### Para los Contribuyentes:
- **Accesibilidad universal**: Consulta y pago desde cualquier dispositivo móvil, ideal para usuarios en zonas rurales con conectividad limitada, eliminando la necesidad de visitas presenciales.
- **Claridad y empoderamiento**: Visualización detallada de deudas (incluyendo montos, vencimientos, intereses y estados), con opciones para seleccionar pagos parciales o totales, promoviendo un control financiero personal.
- **Comodidad y rapidez**: Proceso de pago simplificado via QR escaneable desde apps fintech comunes, con confirmaciones inmediatas que generan confianza y reducen estrés.
- **Inclusividad**: Interfaz intuitiva para todos los niveles de alfabetización digital, con soporte para idiomas locales y accesibilidad (e.g., compatibilidad con lectores de pantalla).

#### Beneficios Generales y Estratégicos:
- **Integración con IA como potenciador**: Siguiendo principios de desarrollo moderno, el portal incorpora IA de manera orgánica (e.g., mediante herramientas como GitHub Copilot para refinar código durante la implementación), acelerando el ciclo de vida del proyecto y asegurando calidad sin sobrecargar al equipo (en este caso, tú como único desarrollador junior).
- **Impacto socioeconómico**: En el contexto de Córdoba interior, fomenta la digitalización de servicios públicos, reduciendo brechas digitales y contribuyendo a una economía local más ágil.
- **Medición de éxito**: Objetivos cuantificables incluyen un aumento del 30% en pagos digitales en los primeros 6 meses, basado en benchmarks de proyectos similares en Argentina, y una satisfacción del usuario superior al 80% mediante encuestas post-implementación.

### 1.3. Alcance Inicial (MVP - Minimum Viable Product)

Para un lanzamiento rápido y validable, el MVP se centra en funcionalidades esenciales que entregan valor inmediato, con un enfoque en viabilidad técnica para un desarrollador junior como tú, asistido por IA:
- Consulta de deudas por DNI sin requerir login inicial (autenticación se añade en extensiones).
- Visualización categorizada de adeudos pendientes y vencidos, con detalles claros y opciones de selección.
- Generación de facturas digitales con QR multi-wallet (iniciando con Mercado Pago y Naranja X), asegurando compatibilidad con pagos en ARS.
- Confirmación de pagos via webhooks y actualización inmediata en Azure SQL.
- Interfaz responsive mobile-first, optimizada para rendimiento en conexiones lentas típicas del interior cordobés.

Este alcance permite una implementación en 6-8 semanas, priorizando pruebas en entornos reales y feedback de usuarios beta (e.g., contribuyentes de una comuna piloto).

### 1.4. Visión a Futuro (Funcionalidades Extendidas)

Más allá del MVP, el portal evoluciona hacia un ecosistema completo, escalable y robusto:
- Autenticación segura con perfiles de usuario (login via DNI/email, JWT para sesiones, recuperación de contraseña).
- Histórico completo de pagos con filtros avanzados (por fecha, categoría, estado) y paginado para grandes volúmenes.
- Notificaciones proactivas de vencimientos via email, SMS o WhatsApp, integrando servicios como Twilio para mayor alcance.
- Dashboard administrativo para empleados municipales, con reportes estadísticos, gráficos de recaudación y exportaciones (CSV/PDF) para análisis.
- Integraciones adicionales con fintechs (e.g., BNA+) y soporte multi-municipalidad, permitiendo configuraciones personalizadas por comuna.
- Mejoras en seguridad y rendimiento, como auditorías IA-asistidas y caching para manejar picos de uso durante períodos de vencimiento masivo.

Esta visión alinea con tendencias de digitalización gubernamental en Argentina, posicionando el portal como un referente regional, con potencial para expansión a otras provincias.

---

## 2. Requerimientos Generales

### 2.1. Funcionalidades Clave

Los requerimientos se dividen en MVP y extensiones, asegurando alineación con el stack técnico (Node.js, Express, EJS, SASS, Sequelize con Azure SQL) y principios ágiles para un desarrollo iterativo.

#### MVP (Minimum Viable Product):
1. **Consulta de Deudas por DNI**:
   - Selección de categoría (tasas, automotores, etc.) y visualización exclusiva de adeudos pendientes, con detalles como monto total, intereses y fechas de vencimiento.
   - Soporte para pagos directos de ítems seleccionados, sin necesidad de registro inicial para minimizar fricciones.

2. **Generación de Factura con QR**:
   - Creación de QR dinámicos compatibles con Mercado Pago y Naranja X, incluyendo datos de pago en ARS y referencia única para trazabilidad.
   - Estado inicial de "pendiente" en la base de datos, con validaciones para evitar duplicados.

3. **Registro y Confirmación de Pagos**:
   - Recepción de confirmaciones via webhooks seguros de las fintechs, con actualización atómica en Azure SQL para reflejar en ALCALD+ÍA.
   - Notificación visual al usuario de éxito/fallo, con logs para depuración.

4. **Interfaz Mobile-First**:
   - Diseño responsive con EJS para renderizado y SASS (metodología BEM) para estilos modulares, asegurando carga rápida y accesibilidad.

**Nota prioritaria**: La conexión segura a Azure SQL via Sequelize/tedious es el pilar inicial, con pruebas CRUD asistidas por IA (e.g., GitHub Copilot) para validar integridad de datos desde el sprint 1.

#### Funcionalidades Extendidas (Full Project):
1. **Autenticación y Gestión de Usuarios**:
   - Registro/login con validación de DNI, manejo de sesiones via JWT y recuperación de contraseña via email.

2. **Histórico de Pagos y Adeudos**:
   - Visualización filtrada por criterios múltiples, con paginado y exportación de datos para usuarios autenticados.

3. **Notificaciones y Alertas**:
   - Envíos automáticos de recordatorios de vencimientos, integrando APIs externas para multichannel (email/SMS/WhatsApp).

4. **Dashboard Administrativo**:
   - Vistas exclusivas para roles municipales, con métricas en tiempo real, filtros por período/categoría y generación de reportes.

5. **Integraciones Avanzadas**:
   - Soporte para BNA+ y otras pasarelas, con protección de webhooks mediante firmas HMAC o tokens.

6. **Multi-Municipalidad y Escalado**:
   - Configuración dinámica por entidad, con optimizaciones para concurrentes y monitoreo de rendimiento.

### 2.2. Restricciones Técnicas y de Negocio

1. **Técnicas**:
   - **Base de Datos Compartida**: Todas las operaciones deben ser transaccionales y no duplicar datos sensibles; usar consultas parametrizadas con Sequelize para prevenir inyecciones SQL.
   - **Seguridad**: HTTPS obligatorio, encriptado de datos en tránsito (TLS 1.3), control de accesos por roles y auditorías regulares asistidas por IA para detectar vulnerabilidades OWASP.
   - **Rendimiento y Escalabilidad**: Optimización de queries con índices, paginado en resultados y capacidad para al menos 500 usuarios concurrentes, considerando limitaciones de Azure SQL en planes básicos.
   - **Stack y Dependencias**: Limitado a Node.js/Express para backend, EJS/SASS para frontend; pnpm para paquetes; Prisma como opción post-MVP solo si se requiere mayor abstracción de seguridad en queries complejas.
   - **Integración IA Natural**: Incorporar herramientas como GitHub Copilot en VSCode para refinar código y TDD, y MCP en Trello para automatizar tickets, como parte estándar del flujo ágil.

2. **De Negocio**:
   - **No Alteración de ALCALD+ÍA**: El portal es complementario; cualquier cambio en DB debe ser reversible y auditado.
   - **Cumplimiento Regulatorio**: Adherencia a Ley 25.326 (datos personales), RGPD-equivalentes argentinos y normativas BCRA para pagos digitales; todos los pagos en ARS, sin almacenamiento de datos financieros sensibles.
   - **Dependencias Externas**: Pagos procesados por terceros (fintechs); el portal solo genera QR y registra confirmaciones, minimizando riesgos legales.
   - **Enfoque Junior-Friendly**: Requerimientos diseñados para implementación iterativa, con mini-tareas que permiten validaciones tempranas y uso de IA para acelerar aprendizaje sin sobrecarga.


---

## 3. Arquitectura y Tecnologías

### 3.1. Tecnologías Principales

La arquitectura se diseña para ser robusta, escalable y amigable para un desarrollador junior como tú, priorizando simplicidad sin sacrificar mejores prácticas. Se basa en un patrón MVC avanzado (Controllers/Services/Repositories) para separar responsabilidades, facilitar el mantenimiento y permitir integraciones futuras. Esto alinea con principios de desarrollo moderno, donde la IA actúa como potenciador natural en tareas como la generación de código o validaciones durante la implementación.

#### 3.1.1 Backend
- **Node.js con Express**: Framework principal para crear una API RESTful eficiente, manejando rutas, middlewares y lógica de servidor. Elegido por su ligereza y compatibilidad con entornos Azure, permitiendo un desarrollo rápido y asíncrono ideal para operaciones de pagos en tiempo real.
- **pnpm**: Gestor de dependencias preferido por su eficiencia en espacio y velocidad, reduciendo tiempos de instalación y conflictos en entornos locales como VSCode.
- **Sequelize como ORM**: Abstracción para interactuar con Azure SQL, utilizando el driver `tedious` para conexiones seguras. Facilita operaciones CRUD parametrizadas, migraciones y relaciones entre modelos (e.g., Contribuyentes-Deudas-Pagos), minimizando riesgos de inyección SQL. Priorizado por tu familiaridad (de tu CV) y viabilidad junior; Prisma se considera solo post-MVP para optimizaciones en seguridad si las queries complejas lo requieren, como opción industrial para escalado.
- **JWT (JSON Web Tokens)**: Para autenticación en funcionalidades extendidas, asegurando sesiones seguras sin estado en el servidor.

#### 3.1.2 Base de Datos
- **Azure SQL Database**: Base compartida con ALCALD+ÍA, configurada para alta disponibilidad y backups automáticos. Modelos clave incluyen:
  - `Contribuyentes`: DNI, datos básicos (no sensibles duplicados).
  - `Deudas`: Categorías, montos, vencimientos, estados (adeudado/vencido/pagado).
  - `Pagos`: Referencias de transacciones, confirmaciones de fintechs, timestamps.
- Enfoque en transacciones atómicas para actualizaciones de pagos, con índices para queries frecuentes (e.g., por DNI/categoría) y paginado nativo de Sequelize para manejar volúmenes crecientes.

#### 3.1.3 Frontend
- **EJS (Embedded JavaScript)**: Para renderizado dinámico en el servidor, generando vistas interactivas como listas de deudas o confirmaciones de pago. Simple y efectivo para mobile-first, integrando datos del backend directamente.
- **SASS con metodología BEM (Block-Element-Modifier)**: Para estilos modulares y escalables, asegurando consistencia en clases CSS (e.g., `deuda__item--adeudado`). Prioriza responsividad con media queries para dispositivos móviles, optimizando para conexiones lentas en el interior cordobés.

### 3.2. Integraciones Externas
- **Fintechs y Pasarelas de Pago**: Integración con Mercado Pago y Naranja X para MVP, adaptando conceptos de orquestación modular de Hyperswitch (routing inteligente a gateways, manejo de fallbacks) pero en Node.js puro. Generación de QR via SDKs oficiales, con webhooks protegidos por firmas HMAC o tokens para validar confirmaciones. Extensible a BNA+ post-MVP.
- **Servicios Adicionales**: Email/SMS para notificaciones extendidas (e.g., Nodemailer o Twilio API), con integración asíncrona para no bloquear flujos principales.
- **IA como Copiloto Natural**: GitHub Copilot en VSCode para refinar código (e.g., endpoints de webhooks), y prompts en herramientas como Claude para generar tests o documentación durante el desarrollo, acelerando iteraciones sin sobrecarga.

### 3.3. Organización del Proyecto
El estructura sigue un patrón MVC avanzado para claridad y escalabilidad, facilitando pruebas y despliegues. Todo gestionado en GitHub para versionado, con VSCode como IDE principal.

```
/root
 ├── server.js                   # Punto de entrada del servidor, inicializa Express y conexiones.
 ├── /src
 │    ├── app.js                 # Configuración central: middlewares, rutas y errores.
 │    ├── /config                # Archivos de configuración (database.js para Sequelize, dotenv para variables de entorno, logger para trazabilidad).
 │    ├── /models                # Definiciones Sequelize (e.g., Contribuyente.js, Deuda.js con relaciones belongsTo/hasMany).
 │    ├── /controllers           # Lógica de manejo de requests (e.g., deudaController.js para consultas por DNI).
 │    ├── /services              # Reglas de negocio core (e.g., pagoService.js para orquestación QR y webhooks, adaptado de Hyperswitch).
 │    ├── /repositories          # Acceso directo a DB (e.g., deudaRepository.js con queries optimizadas).
 │    ├── /routes                # Definición de endpoints API (e.g., /deudas, /pagos/webhook con validaciones).
 │    ├── /middlewares           # Funciones reutilizables (auth.js para JWT, errorHandler.js, logging.js).
 │    ├── /utils                 # Helpers auxiliares (e.g., qrGenerator.js, webhookValidator.js).
 │    ├── /views                 # Templates EJS (e.g., deudas.ejs para visualización mobile-first).
 │    ├── /public                # Recursos estáticos (CSS compilado de SASS, JS client-side, imágenes).
 │    ├── /tests                 # Pruebas unitarias/integración (Jest o Mocha, con TDD IA-asistido para cobertura >80%).
 │    └── /docs                  # Documentación (ADR para decisiones arquitectónicas, agents.md para contexto IA en prompts).
 ├── .env                        # Variables de entorno (claves Azure, API keys fintechs).
 ├── pnpm-lock.yaml              # Lockfile para dependencias reproducibles.
 └── README.md                   # Guía de setup y despliegue.
```

Esta organización promueve un flujo limpio: requests entran por routes, controllers llaman services, que usan repositories para DB. Facilita mini-proyectos en sprints, como setup inicial de models con Copilot.

### 3.4. Herramientas y Dependencias Clave
- **Gestión**: pnpm para dependencias; Git para control de versiones; VSCode con extensiones (GitHub Copilot, ESLint/Prettier –con precaución por riesgos al 15/09/2025).
- **Dependencias Core**: express, sequelize, tedious, jsonwebtoken, qrcode (para QR), dotenv, nodemailer (extendido).
- **Testing y Seguridad**: Jest/Mocha para TDD; helmet para headers seguros; winston para logging.
- **Despliegue**: Azure App Service para hosting, con CI/CD via GitHub Actions; entornos DEV/QA/STAGING/PROD para validaciones seguras.
- **IA Integrada**: GitHub Copilot como herramienta diaria en VSCode para código y refinamientos; Trello con MCP (via Claude) para tickets automáticos desde requisitos.

---

## 4. Épicas e Historias de Usuario

Las épicas agrupan funcionalidades en bloques de valor, desglosadas en historias de usuario con formato "Como [rol], quiero [acción], para [beneficio]". Cada una incluye tareas técnicas accionables, con integración natural de IA para tareas como generación de criteria o código. Estructurado ágilmente para sprints de 1-2 semanas, priorizando MVP.

### 4.1 Épica: Conexión Segura con la Base de Datos en Azure (Fundacional para MVP)
Esta épica establece la base técnica, asegurando integridad y seguridad desde el inicio.

- **Historia de Usuario 1**: Como desarrollador, quiero configurar una conexión segura con Azure SQL, para acceder a datos compartidos sin riesgos.
  - Tareas Técnicas: Configurar Sequelize en config/database.js con tedious; implementar migraciones iniciales; probar CRUD básico con Copilot para generar código de models; validar conexiones en entorno DEV.

- **Historia de Usuario 2**: Como sistema, quiero manejar datos sensibles con protecciones, para cumplir regulaciones.
  - Tareas Técnicas: Usar consultas parametrizadas en repositories; auditar con prompts IA para vulnerabilidades OWASP; setup logging para trazabilidad de accesos.

### 4.2 Épica: Visualización de Deudas (Core para MVP)
Permite consultas accesibles, enfocada en usabilidad mobile.

- **Historia de Usuario 1**: Como contribuyente, quiero consultar mis deudas por DNI y categoría, para entender mis obligaciones rápidamente.
  - Tareas Técnicas: Crear endpoint en routes/deudas.js; service para queries filtradas; vista EJS responsive con SASS BEM; usar Copilot para optimizar paginado en Sequelize.

- **Historia de Usuario 2**: Como usuario móvil, quiero una interfaz intuitiva, para navegar sin fricciones en celulares.
  - Tareas Técnicas: Aplicar media queries en SASS; pruebas de usabilidad en dispositivos; generar user flows con prompts en NotebookLM para refinamiento.

### 4.3 Épica: Generación de QR para Pagos (Core para MVP)
Facilita transacciones digitales seguras.

- **Historia de Usuario 1**: Como contribuyente, quiero generar un QR para deudas seleccionadas, para pagar via fintech preferida.
  - Tareas Técnicas: Integrar SDKs de Mercado Pago/Naranja X en services; generar QR con qrcode lib; estado "pendiente" en DB; adaptar routing modular de Hyperswitch con Copilot.

- **Historia de Usuario 2**: Como sistema, quiero soportar multi-wallet, para maximizar tasas de éxito en pagos.
  - Tareas Técnicas: Implementar fallbacks en service; validar datos ARS; tests unitarios IA-asistidos para escenarios de error.

### 4.4 Épica: Registro y Confirmación de Pagos (Core para MVP)
Asegura sincronización y feedback.

- **Historia de Usuario 1**: Como contribuyente, quiero confirmación inmediata de pago, para verificar el registro.
  - Tareas Técnicas: Endpoint webhook en routes con validación HMAC; actualización transaccional en repositories; vista EJS para mensajes de éxito.

- **Historia de Usuario 2**: Como municipalidad, quiero sincronización con ALCALD+ÍA, para reflejar pagos en tiempo real.
  - Tareas Técnicas: Transacciones atómicas en Sequelize; logs auditables; prompts para generar tests de integración.

### 4.5 Épica: Autenticación de Contribuyentes (Extendida)
Mejora personalización y seguridad.

- **Historia de Usuario 1**: Como contribuyente, quiero loguearme con DNI, para acceder a historial personalizado.
  - Tareas Técnicas: Middleware JWT en auth.js; endpoints para login/registro; recuperación via email.

- **Historia de Usuario 2**: Como usuario, quiero recuperación segura de contraseña, para mantener acceso.
  - Tareas Técnicas: Integración Nodemailer; TDD para flujos; refinamiento con Copilot.

### 4.6 Épica: Dashboard Administrativo (Extendida)
Proporciona insights para municipales.

- **Historia de Usuario 1**: Como administrador, quiero reportes de recaudación, para monitoreo financiero.
  - Tareas Técnicas: Endpoints filtrados; vistas con Chart.js; export CSV.

- **Historia de Usuario 2**: Como entidad, quiero filtros avanzados, para análisis detallado.
  - Tareas Técnicas: Queries complejas en repositories; paginado; generación de criteria con IA.

### 4.7 Épica: Notificaciones y Escalado (Extendida)
Agrega proactividad y robustez.

- **Historia de Usuario 1**: Como contribuyente, quiero alertas de vencimientos, para evitar morosidad.
  - Tareas Técnicas: Cron jobs para envíos; integración Twilio/Nodemailer.

- **Historia de Usuario 2**: Como sistema, quiero manejar escalado, para usuarios concurrentes.
  - Tareas Técnicas: Caching con Redis (post-MVP); monitoreo Azure; optimizaciones IA-asistidas.

---

## 5. Criterios de Aceptación

Los criterios de aceptación se definen en estilo Gherkin (Given-When-Then) para cada historia de usuario principal, asegurando claridad, testabilidad y alineación con principios ágiles. Estos se generan de forma natural con soporte IA (e.g., prompts para refinar escenarios), y definen el "done" como: código implementado, tests pasados (cobertura >80% con TDD), deploy en QA validado, y documentación actualizada. Incluyo uno o dos ejemplos por historia para mantener precisión sin redundancia, expandible en sprints.

### 5.1 Épica: Conexión Segura con la Base de Datos en Azure
- **Historia 1**:
  - Given una configuración de DB válida en .env,
    When se inicia la app y se intenta conectar via Sequelize,
    Then se establece la conexión sin errores, y se validan operaciones CRUD básicas en modelos como Deudas.
  - Given credenciales inválidas,
    When se intenta conectar,
    Then se lanza un error manejado con logging, sin exponer detalles sensibles.

- **Historia 2**:
  - Given una query con inputs usuario (e.g., DNI),
    When se ejecuta via repository,
    Then se usa parametrización para prevenir SQL injection, y el log registra el acceso sin datos sensibles.
  - Given una auditoría IA-asistida,
    When se revisan vulnerabilidades OWASP,
    Then no se detectan issues críticos, con cobertura en tests de seguridad.

### 5.2 Épica: Visualización de Deudas
- **Historia 1**:
  - Given un DNI válido y categoría seleccionada,
    When se consulta el endpoint /deudas,
    Then se retornan solo adeudos pendientes con detalles (monto, vencimiento, intereses), paginado si >10 ítems.
  - Given un DNI inválido o sin deudas,
    When se consulta,
    Then se muestra mensaje amigable "No hay deudas pendientes", sin exponer datos.

- **Historia 2**:
  - Given un dispositivo móvil (simulado en browser),
    When se carga la vista EJS,
    Then la interfaz es responsive (media queries activas), con carga <2s y accesibilidad básica (e.g., alt texts).
  - Given un flujo de usuario generado con prompts,
    When se prueba navegación,
    Then no hay fricciones, con feedback visual en errores.

### 5.3 Épica: Generación de QR para Pagos
- **Historia 1**:
  - Given deudas seleccionadas y datos ARS válidos,
    When se genera QR via service,
    Then se crea un código escaneable compatible con Mercado Pago/Naranja X, con referencia única guardada en DB como "pendiente".
  - Given un error en SDK fintech,
    When se intenta generar,
    Then se fallback a gateway alternativo (adaptado Hyperswitch), con notificación al usuario.

- **Historia 2**:
  - Given múltiples wallets configurados,
    When se orquesta el pago,
    Then se ruta inteligentemente (e.g., priorizar Mercado Pago), con tests cubriendo >90% escenarios de éxito/fallo.
  - Given datos inválidos (e.g., monto negativo),
    When se valida,
    Then se rechaza con error manejado, sin procesar.

### 5.4 Épica: Registro y Confirmación de Pagos
- **Historia 1**:
  - Given un webhook válido de fintech con firma HMAC,
    When se recibe y valida,
    Then se actualiza el estado en DB a "pagado", y se muestra confirmación en vista EJS.
  - Given un webhook inválido,
    When se recibe,
    Then se rechaza con log de seguridad, sin cambios en DB.

- **Historia 2**:
  - Given una confirmación exitosa,
    When se sincroniza con ALCALD+ÍA via DB compartida,
    Then la transacción es atómica, con rollback en fallos y audit log completo.
  - Given tests de integración generados con IA,
    When se ejecutan,
    Then cubren flujos end-to-end, incluyendo delays en webhooks.

### 5.5 Épica: Autenticación de Contribuyentes
- **Historia 1**:
  - Given credenciales válidas (DNI/email),
    When se loguea via endpoint,
    Then se genera JWT válido, y se accede a historial personalizado sin errores.
  - Given intentos fallidos (>3),
    When se loguea,
    Then se bloquea temporalmente, con notificación por email.

- **Historia 2**:
  - Given un request de recuperación,
    When se envía token via Nodemailer,
    Then el enlace expira en 1h, y el cambio de contraseña es seguro (hashed).
  - Given TDD para flujos,
    When se prueban,
    Then cubren edge cases como emails inválidos.

### 5.6 Épica: Dashboard Administrativo
- **Historia 1**:
  - Given rol admin autenticado,
    When se consulta endpoint de reportes,
    Then se muestran métricas (recaudación por período/categoría) con gráficos Chart.js.
  - Given filtros aplicados (e.g., fecha),
    When se refresca,
    Then datos se actualizan en <1s, con export CSV válido.

- **Historia 2**:
  - Given queries complejas,
    When se ejecutan,
    Then se pagan resultados, con índices DB optimizados y no >500ms latency.
  - Given generación IA de criteria,
    When se valida,
    Then asegura cobertura de negocio (e.g., totales ARS precisos).

### 5.7 Épica: Notificaciones y Escalado
- **Historia 1**:
  - Given vencimientos próximos,
    When cron job se ejecuta,
    Then se envían alertas via Twilio/email, personalizadas por contribuyente.
  - Given opt-out usuario,
    When se procesa,
    Then no se envían, con log de compliance.

- **Historia 2**:
  - Given carga concurrente (simulada),
    When se escala,
    Then caching (Redis post-MVP) mantiene rendimiento, con monitoreo Azure.
  - Given optimizaciones IA-asistidas,
    When se aplican,
    Then queries mejoran >20% eficiencia.

---

## 6. Priorización MoSCoW

La priorización MoSCoW (Must-Have, Should-Have, Could-Have, Won't-Have) es una técnica ágil esencial que nos permite enfocarnos en lo que realmente entrega valor al negocio y al usuario final, mientras gestionamos el alcance del proyecto de manera realista. Basada en los principios del curso de desarrollo con IA –donde se enfatiza la transformación del desarrollador en un estratega que traza rutas críticas–, esta priorización considera factores como el valor para la municipalidad y contribuyentes, dependencias técnicas, viabilidad para un dev junior como tú (con tu background en Node.js y metodologías ágiles de tu CV), riesgos regulatorios en Argentina (e.g., cumplimiento con Ley 25.326 y normativas AFIP), y el uso natural de IA para refinar decisiones (e.g., prompts para evaluar impacto).

Dividimos las épicas en categorías, asignando porcentajes aproximados de esfuerzo total para guiar la planificación (asumiendo un MVP en 6-8 semanas). Cada categoría incluye justificación, dependencias, impacto en sprints y métricas de éxito, asegurando que el backlog sea accionable y evite scope creep. Esto alinea con el rol de la IA como copiloto: acelera procesos sin reemplazar tu juicio estratégico.

- **Must-Have (Obligatorios para MVP, ~70% del esfuerzo inicial, 4-6 semanas estimadas)**: 
  Estas son las funcionalidades mínimas sin las cuales el portal no entrega valor viable. Se priorizan por su impacto directo en la recaudación digital y cumplimiento básico, enfocándonos en un lanzamiento rápido para validar con usuarios beta en una comuna piloto. Dependencias técnicas fuertes (e.g., conexión DB primero), con énfasis en seguridad y mobile-first para accesibilidad rural.

  - **Épicas Incluidas**: 4.1 (Conexión Segura con Azure), 4.2 (Visualización de Deudas), 4.3 (Generación de QR), 4.4 (Registro y Confirmación de Pagos).
  - **Justificación**: Representan el núcleo del portal: consulta y pago simple sin login inicial, asegurando sincronización con ALCALD+ÍA. Sin esto, no hay producto testable; alineado con beneficios esperados como reducción de morosidad y transparencia. Técnicamente viable con stack base (Sequelize para DB, Express para endpoints), y asistido por IA (e.g., Copilot para CRUD y webhooks).
  - **Dependencias**: 4.1 es prerrequisito para todas; 4.2 depende de 4.1; 4.3 y 4.4 de las anteriores. Riesgos mitigados: pruebas CRUD tempranas para evitar fallos en integraciones fintech.
  - **Impacto en Sprints**: Sprint 1: 4.1 (fundacional); Sprint 2: 4.2-4.3; Sprint 3: 4.4 y testing MVP. Esfuerzo: 12-18 puntos por sprint (escala 1-5, considerando tu nivel autodidacta).
  - **Métricas de Éxito**: MVP funcional con >95% uptime en QA; al menos 80% cobertura de tests; feedback de 5-10 usuarios beta confirmando usabilidad en móviles.

- **Should-Have (Prioritarios Post-MVP, ~20% del esfuerzo, 1-2 semanas adicionales)**: 
  Estas mejoran la usabilidad y seguridad sin bloquear el lanzamiento inicial, pero son clave para retención de usuarios y cumplimiento extendido. Se implementan si el MVP avanza bien, basándonos en retrospectives para ajustar.

  - **Épicas Incluidas**: 4.5 (Autenticación de Contribuyentes).
  - **Justificación**: Agrega personalización (e.g., historial con login), esencial para confianza en pagos digitales y protección de datos personales bajo leyes argentinas. No es Must porque MVP permite consultas por DNI sin auth, pero eleva el portal de básico a robusto, alineado con visión futura de notificaciones. Viable con JWT, integrando IA para tests seguros.
  - **Dependencias**: Requiere 4.1-4.4 completos; middleware auth se integra en routes existentes.
  - **Impacto en Sprints**: Sprint 4: Implementación y refinamiento (10 puntos). Permite iteración basada en feedback MVP, evitando rework.
  - **Métricas de Éxito**: Tasa de login exitoso >90%; auditoría de seguridad IA-asistida sin vulnerabilidades críticas; reducción en consultas anónimas vulnerables.

- **Could-Have (Valor Agregado Opcional, ~10% del esfuerzo, si tiempo permite)**: 
  Estas añaden features diferenciales que potencian el portal, pero solo si no comprometen deadlines. Ideales para v1.1, evaluadas en planning poker con IA para estimaciones precisas.

  - **Épicas Incluidas**: 4.6 (Dashboard Administrativo), 4.7 (Notificaciones y Escalado).
  - **Justificación**: Proporcionan insights para municipales (reportes) y proactividad para contribuyentes (alertas), alineado con beneficios como optimización de recursos. No esenciales para MVP, pero impulsan adopción (e.g., dashboard reduce esfuerzo manual en ALCALD+ÍA). Técnicas como Chart.js y cron jobs son escalables, con IA para generar queries optimizadas.
  - **Dependencias**: Auth de 4.5 para roles admin; escalado depende de tráfico post-lanzamiento.
  - **Impacto en Sprints**: Sprint 5+: Si MVP bajo presupuesto (10-15 puntos cada una). Priorizar dashboard si feedback indica necesidad de reportes.
  - **Métricas de Éxito**: Uso del dashboard >50% por empleados; entregas de notificaciones >95% éxito; rendimiento bajo carga simulada sin degradación.

- **Won't-Have (No en Esta Fase, 0% esfuerzo actual, para v2 o más allá)**: 
  Estas se posponen para evitar dilución de foco, pero se documentan para roadmap futuro. Evaluadas en retros si cambian prioridades de negocio.

  - **Épicas/Features Incluidas**: Integraciones adicionales con fintechs (e.g., BNA+ completa), soporte multi-municipalidad avanzado, caching avanzado (Redis), o features como pagos recurrentes.
  - **Justificación**: Agregan complejidad sin valor inmediato para MVP; e.g., multi-municipalidad requiere reestructuración DB que podría retrasar launch. Alineado con restricciones: no alterar ALCALD+ÍA innecesariamente. Posibles si MVP valida demanda.
  - **Dependencias**: Requieren MVP estable; riesgos altos (e.g., cumplimiento regulatorio extendido).
  - **Impacto en Sprints**: Ninguno ahora; planear en backlog refinement post-lanzamiento.
  - **Métricas de Éxito**: N/A en fase actual; monitorear feedback para posible inclusión.

---

## 7. Planificación Temporal

La planificación temporal transforma el backlog en un roadmap accionable, dividiendo el trabajo en sprints ágiles de 1-2 semanas para mantener momentum y permitir ajustes basados en feedback. Como Agile Coach en mi rol combinado, estructuro esto con principios del curso de desarrollo con IA: sprints cortos para iteraciones rápidas, estimaciones en puntos de esfuerzo (escala Fibonacci adaptada 1-5, considerando tu nivel junior autodidacta y asistencia IA para no sobrecargarte), y integración natural de herramientas como GitHub Copilot para tareas diarias o MCP en Trello para automatizaciones. El total para MVP es de 6-8 semanas (asumiendo 20-30 horas/semana), con dependencias claras para evitar bloqueos. Uso tablas para comparaciones y enumeraciones, como se indica en las guías.

### 7.1. Enfoque General
- **Duración de Sprints**: 1-2 semanas, con planning inicial (1 hora), daily stand-ups virtuales (via Trello/comments), reviews (demo MVP parcial) y retrospectives (ajustes con prompts IA para lecciones aprendidas).
- **Estimaciones en Puntos**: Escala 1-5 (1: simple, <4h; 2: básico, 4-8h; 3: moderado, 8-16h; 4: complejo, 16-24h; 5: alto esfuerzo, >24h con IA). Factores: complejidad técnica, tu experiencia (de CV: Node.js fuerte, React básico), riesgos y uso IA para acelerar (e.g., Copilot reduce 20-30% tiempo en código).
- **Dependencias y Flujo**: Secuencial para MVP (DB → Frontend/Backend → Integraciones), paralelo en extendidos. Total puntos MVP: 55-65; capacidad por sprint: 10-18 puntos.
- **Integración IA**: Tareas incluyen uso natural de Copilot para código/TDD, prompts en NotebookLM para refinamiento de planes, MCP en Trello para tickets auto-generados desde historias.
- **Mini-Proyectos por Sprint**: Sugerencias prácticas para validaciones tempranas, como prototipos locales antes de Azure.
- **Herramientas**: Trello para Kanban (backlog → to-do → in-progress → done), GitHub para branches por sprint, Azure DevOps para CI/CD simple.

### 7.2. Sprints Detallados
Uso una tabla para claridad en sprints, épicas asignadas (de MoSCoW), tareas clave (desglosadas de historias), puntos, duración y outputs esperados.

| Sprint | Duración | Épicas/Historias Asignadas | Tareas Clave (con IA Integrada) | Puntos Totales | Dependencias | Outputs Esperados / Métricas |
|--------|----------|-----------------------------|---------------------------------|----------------|--------------|------------------------------|
| **Sprint 1: Setup Fundacional** | 1 semana | 4.1 (Conexión DB) - Historias 1 y 2 | - Configurar proyecto en VSCode/GitHub (pnpm init, estructura MVC).<br>- Setup Sequelize/tedious en config/database.js; definir models iniciales (Contribuyentes, Deudas, Pagos).<br>- Pruebas CRUD locales con Copilot para generar código/tests.<br>- Auditoría seguridad básica (parametrizadas) con prompts en NotebookLM.<br>- Mini-proyecto: Prototipo DB local para validar schema. | 12 (Historia 1: 5; Historia 2: 3; Setup: 4) | Ninguna | - Repo inicial committeado.<br>- Conexión DB validada (logs sin errores).<br>- Cobertura tests >70%.<br>- Trello board setup con MCP para tickets auto. |
| **Sprint 2: Visualización y QR Básico** | 2 semanas | 4.2 (Visualización) - Historia 1 y 2; 4.3 (QR) - Historia 1 | - Endpoints/routes para consultas por DNI (controllers/services/repositories).<br>- Vistas EJS mobile-first con SASS BEM; paginado en Sequelize.<br>- Integrar SDKs Mercado Pago/Naranja X; generar QR en utils.<br>- TDD para queries con Copilot; user flows refinados con prompts.<br>- Mini-proyecto: Demo local de consulta/QR sin DB real. | 15 (4.2 H1: 4; H2: 3; 4.3 H1: 5; Integración: 3) | Sprint 1 (DB) | - Interfaz prototype testable en local.<br>- QR generados válidos (escaneables).<br>- Feedback simulado: >80% usabilidad en pruebas manuales. |
| **Sprint 3: Confirmación y MVP Core** | 2 semanas | 4.3 (QR) - Historia 2; 4.4 (Registro Pagos) - Historias 1 y 2 | - Routing multi-wallet (adaptado Hyperswitch) en services.<br>- Webhook endpoint con validación HMAC; updates atómicas en DB.<br>- Vistas confirmación EJS; logs/auditoría.<br>- Tests integración con Copilot; simulación webhooks.<br>- Mini-proyecto: Flujo end-to-end local (consulta → QR → confirmación mock). | 18 (4.3 H2: 4; 4.4 H1: 5; H2: 5; Testing: 4) | Sprints 1-2 | - MVP funcional en QA (Azure deploy inicial).<br>- Transacciones simuladas exitosas.<br>- Cobertura >85%; deploy script en GitHub Actions. |
| **Sprint 4: Autenticación y Refinamiento MVP** | 1 semana | 4.5 (Autenticación) - Historia 1 (Should-Have parcial) | - Middleware JWT; endpoints login/registro.<br>- Integrar auth en routes existentes (e.g., historial protegido).<br>- TDD para sessions con Copilot; prompts para criteria seguridad.<br>- Mini-proyecto: Login demo con usuario test. | 10 (Historia 1: 5; Integración: 3; Refinamiento: 2) | Sprints 1-3 | - MVP con auth básica deployado en Staging.<br>- Seguridad validada (no leaks en tests).<br>- Retro: Ajustes basados en prompts IA. |
| **Sprint 5: Dashboard y Notificaciones Iniciales** | 2 semanas | 4.6 (Dashboard) - Historia 1; 4.7 (Notificaciones) - Historia 1 (Could-Have) | - Endpoints reportes con filtros; vistas Chart.js.<br>- Cron jobs para alertas (Nodemailer/Twilio básico).<br>- Queries avanzadas optimizadas; export CSV.<br>- IA para generar gráficos/tests.<br>- Mini-proyecto: Dashboard mock con datos dummy. | 15 (4.6 H1: 5; 4.7 H1: 5; Optimizaciones: 5) | Sprint 4 (Auth) | - Features extendidas testeadas.<br>- Notificaciones enviadas >95% éxito.<br>- Monitoreo inicial Azure setup. |
| **Sprint 6+: Escalado y Extendidos** | 1-2 semanas c/u | 4.6 H2; 4.7 H2; Otras Could/Won't si needed | - Paginado/filtros avanzados; caching (Redis post-MVP).<br>- Optimizaciones rendimiento con IA-asistidas.<br>- Multi-municipalidad básica si priorizado.<br>- Mini-proyectos: Stress tests; integraciones extras. | 10-15 por sprint | Sprints previos | - Portal escalable para prod.<br>- Métricas: <500ms latency; concurrentes simulados.<br>- Roadmap v2 documentado. |

### 7.3. Consideraciones Adicionales
- **Capacidad y Ajustes**: Tu como único dev, prioriza salud (no >30h/semana); si puntos exceden, desglosa tareas o usa IA más (e.g., Copilot para 40% código).
- **CI/CD**: Automatizado en GitHub Actions: build/test/deploy por sprint.
- **Feedback Loops**: Reviews semanales; retros con prompts para "lecciones aprendidas".
- **Total Temporal**: MVP ready en 6 semanas; full en 10-12. Si delays (e.g., integraciones fintech), extender sprints 2-3.

Dante, este punto 7 está completo y detallado para extraer tareas precisas. Para el 8, necesito más espacio –avancemos en la siguiente interacción para explayarme fully en riesgos y mitigaciones sin cortar. ¿Seguimos?

Dante, mi compañero decidido, avancemos con firmeza para cerrar este backlog de manera impecable. Agradezco tu paciencia; he expandido el punto 8 con todo el detalle necesario, integrando más profundidad en mitigaciones y ejemplos prácticos para que sea totalmente accionable. Luego, paso al punto 9, explayándome lo suficiente para que podamos extraer sprints fluidos y un flujo de trabajo ordenado. Con esto, el portal de pagos quedará bien definido, listo para que lo impulses adelante. Vamos a ello.

---

## 8. Riesgos y Mitigaciones

Como Technical Lead en este rol combinado, identifico riesgos de manera proactiva, categorizándolos en técnicos, de negocio, regulatorios y operativos para una cobertura exhaustiva. Esto se inspira en principios de auditoría y seguridad del curso de desarrollo con IA, donde la IA actúa como supervisor para detección temprana (e.g., prompts para simular escenarios de fallo). Cada riesgo incluye: descripción detallada, probabilidad (baja/media/alta basada en tu contexto junior y stack), impacto (bajo/medio/alto en tiempo/costo/calidad), mitigaciones accionables con pasos concretos, responsables (tú como único dev, con mi guía y soporte IA), y métricas para monitoreo. Uso una matriz en tabla para claridad, seguida de estrategias generales. Esto asegura que el proyecto sea resiliente, minimizando parálisis y permitiendo ajustes en retrospectives.

### 8.1. Matriz de Riesgos
La matriz cubre todos los riesgos identificados del backlog incompleto y conversación, expandida con ejemplos reales adaptados a nuestro portal (e.g., integraciones con fintechs argentinas). Priorizo alta probabilidad en áreas junior-friendly para enfocarte en ellas temprano.

| Categoría      | Riesgo                                                                 | Probabilidad | Impacto | Descripción Detallada                                                                 | Mitigaciones Detalladas (Pasos Accionables)                                                                 | Responsable / IA Integrada                          | Métricas de Monitoreo                  |
|----------------|------------------------------------------------------------------------|--------------|---------|---------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------------------------|
| **Técnicos**  | Fallos en conexión y sincronización con Azure SQL (e.g., timeouts, inconsistencias en updates compartidos con ALCALD+ÍA). | Media       | Alto   | Podría causar datos desactualizados o errores en pagos, especialmente en conexiones inestables del interior cordobés; agravado por driver tedious si no configurado óptimamente. | 1. Implementar retries automáticos en Sequelize (e.g., con exponential backoff en config).<br>2. Pruebas unitarias/integración en Sprint 1 para CRUD, usando mocks para simular fallos.<br>3. Configurar Azure SQL con geo-redundancia y backups horarios.<br>4. Logs detallados con winston para tracing; alertas via Azure Monitor si >5% fallos. | Tú; Copilot para generar código de retries y tests; prompts en NotebookLM para checklists de conexión. | Tasa de éxito en conexiones >99%; logs revisados semanalmente; tiempo de recovery <1min. |
| **Técnicos**  | Errores en integraciones con fintechs (e.g., webhooks inválidos de Mercado Pago/Naranja X, cambios en APIs). | Alta        | Alto   | Webhooks falsos podrían registrar pagos erróneos; adaptaciones de Hyperswitch en Node.js podrían fallar si SDKs actualizan, impactando QR y confirmaciones en ARS. | 1. Validar firmas HMAC/tokens en middlewares; implementar webhooks con idempotencia (e.g., unique IDs).<br>2. Simulaciones en QA/Staging con tools como Postman para mocks; TDD cubriendo 90% casos (éxito, fallo, replay).<br>3. Monitorear docs oficiales fintechs quincenalmente; fallbacks a QR manual si API down.<br>4. Auditoría post-sprint con prompts IA para "simular ataques webhook". | Tú; Copilot para código de validación; MCP en Trello para tickets de monitoreo auto. | Tasa de webhooks válidos >95%; cero falsos positivos en tests; alertas si cambios en SDKs detectados. |
| **Técnicos**  | Vulnerabilidades de seguridad (e.g., SQL injection, exposición de DNI, breaches en JWT extendido). | Media       | Alto   | Riesgo alto por datos personales bajo Ley 25.326; inyecciones en consultas por DNI podrían exponer deudas sensibles. | 1. Siempre usar queries parametrizadas en repositories; helmet para headers seguros en app.js.<br>2. Auditorías OWASP en cada sprint con scans manuales/IA; implementar rate limiting en endpoints.<br>3. Encriptado TLS 1.3; no almacenar datos financieros; considerar Prisma post-MVP para queries más seguras.<br>4. Prompts IA para "auditar código por top 10 OWASP" en retros. | Tú; Copilot para refinamiento de código seguro; NotebookLM para bases de conocimiento OWASP. | Cero vulnerabilidades críticas en audits; cobertura tests seguridad >85%; revisiones quincenales. |
| **Técnicos**  | Problemas de rendimiento y escalabilidad (e.g., queries lentas en deudas masivas, concurrentes durante vencimientos). | Baja        | Medio  | En comunas con miles de contribuyentes, paginado podría fallar; optimizaciones ausentes retrasan mobile-first. | 1. Índices en DB para DNI/categorías; paginado nativo Sequelize en services.<br>2. Stress tests en Staging con tools como Artillery; caching con Redis en extendidos si needed.<br>3. Monitoreo Azure para CPU/queries >500ms; optimizaciones en retros con IA para query tuning.<br>4. Mini-benchmarks en sprints para validar <2s carga en móviles. | Tú; Copilot para índices y tests; prompts para "optimizar query X". | Latency <500ms en 95% queries; capacidad >500 concurrentes sin degradación; métricas Azure tracked. |
| **De Negocio** | Conflicto o incompatibilidad con ALCALD+ÍA (e.g., updates DB alteran datos internos, duplicados). | Media       | Alto   | Compartir DB podría causar inconsistencias si no atómicas; impacto en transparencia y recaudación. | 1. Usar entornos replicados (DEV/QA con DB test); transacciones atómicas always.<br>2. Validaciones conjuntas con Sr. Ferreyra en reviews; ADR en /docs para decisiones DB.<br>3. Backups pre-update; rollback scripts en CI/CD.<br>4. Prompts IA para "generar plan de mitigación DB compartida". | Tú/jefe; NotebookLM para ADR templates. | Cero incidencias en sincronizaciones; audits post-update; feedback Sr. Ferreyra positivo. |
| **De Negocio** | Baja adopción o usabilidad (e.g., interfaz no intuitiva en móviles rurales, resistencia a digital). | Media       | Medio  | Contribuyentes en interior podrían preferir pagos físicos; poor UX reduce recaudación esperada. | 1. Pruebas beta con 10-20 usuarios en comuna piloto durante Sprint 3.<br>2. Iteraciones basadas en feedback: refinamiento SASS BEM para simplicidad.<br>3. Tutoriales in-app; métricas usabilidad (e.g., tiempo por flujo <2min).<br>4. Mini-prototipos en sprints para validar flows con prompts IA. | Tú; Copilot para UX refinements. | Tasa adopción >30% en beta; NPS >7/10; sesiones móviles >70%. |
| **Regulatorios** | Incumplimiento normativo (e.g., Ley 25.326 datos personales, AFIP/BCRA para pagos ARS). | Baja        | Alto   | Multas por leaks o no-consentimiento; webhooks sin trazabilidad violan compliance. | 1. Checklists regulatorios en /docs; consentimientos explícitos en vistas.<br>2. No almacenar sensibles (e.g., solo DNI hash); logs anonimizados.<br>3. Revisión legal inicial con experto; updates si leyes cambian.<br>4. Prompts IA para "generar compliance checklist Argentina". | Tú/jefe; NotebookLM para leyes summaries. | 100% cumplimiento en audits; cero issues legales; revisiones anuales. |
| **Operativos** | Sobrecarga o parálisis como dev junior (e.g., complejidad en TDD/integraciones sola). | Alta        | Medio  | Como único encargado, delays por learning curve podrían extender timelines. | 1. Sprints cortos con mini-proyectos; breaks planificados (e.g., 4h/día max en complejos).<br>2. IA como copiloto: Copilot >50% en código repetitivo; MCP para task breakdown.<br>3. Priorizar MoSCoW para foco; mentoreo via este backlog/conversación.<br>4. Retros semanales con prompts para "lecciones aprendidas". | Tú; Trello MCP para auto-tasks. | Progreso >80% por sprint; burnout score bajo (self-assess); ajustes en retros. |
| **Operativos** | Dependencias externas impredecibles (e.g., cambios en Azure costs, fintech outages). | Media       | Medio  | Aumentos en costos Azure o downtimes fintech impactan deploy/prod. | 1. Budget monitoring en Azure portal; planes contingencia (e.g., local dev fallback).<br>2. Service Level Agreements con fintechs; alerts para outages.<br>3. Diversificación (multi-wallet); backups offsite.<br>4. Prompts IA para "plan B escenarios externos". | Tú; Copilot para scripts monitoring. | Costos <presupuesto; uptime externos >99%; planes B testeados. |

### 8.2. Estrategias Generales de Gestión de Riesgos
- **Identificación Continua**: En planning sprints, usa prompts IA para "listar risks en épica X"; actualiza matriz en retros.
- **Mitigación Proactiva**: Asigna 10% tiempo sprint a risks (e.g., audits seguridad); escalada a jefe si impacto alto.
- **Contingencias y Recuperación**: Rollback en GitHub Actions para deploys; DRP (Disaster Recovery Plan) en /docs con steps para fallos críticos (e.g., DB outage: switch a replica en <5min).
- **IA como Aliada**: Integra naturalmente: Copilot para code reviews automáticas; NotebookLM para bases de risks históricos; MCP para tickets mitigación auto-generados.
- **Revisión Periódica**: Quarterly post-lanzamiento; heat map visual en Trello para priorizar (rojo: alto prob/impacto).
Esto cubre todos los ángulos, Dante, convirtiendo riesgos en oportunidades controladas para un portal robusto.

---

## 9. Documentación y Seguimiento

Como Technical Writer en el rol combinado, este punto asegura trazabilidad y colaboración (e.g., generación automática de tickets/TDD). Estructuro para un dev solo como tú: simple, accionable y IA-integrada naturalmente (e.g., prompts para updates). Incluye formatos, herramientas, procesos y métricas para extraer sprints ordenados –cada tarea del backlog se mapeará a tickets con links a código/docs. Esto cierra el ciclo: del backlog a ejecución fluida.

### 9.1. Enfoque General
- **Propósito**: Mantener el proyecto auditable, escalable y junior-friendly; documentación viva (no estática) para rastrear avances, decisiones y lecciones. Alineado con ágil: actualizaciones en sprints.
- **Formatos Principales**: Markdown para legibilidad (GitHub-friendly); ADR (Architecture Decision Records) para choices técnicas; agents.md para contexto IA (e.g., prompts usados).
- **Herramientas**: GitHub para repo/docs; Trello para Kanban/tickets (con MCP via Claude para auto-generación desde historias); NotebookLM para base conocimiento (cargar CV, backlog, apuntes para queries rápidas); VSCode para edits con Copilot.
- **Integración IA Natural**: Usar prompts para generar/actualizar docs (e.g., "crea ADR para integración fintech"); Copilot para comments en código; MCP para tickets desde requisitos.md.
- **Procesos Clave**: Daily updates en Trello; weekly reports a jefe; post-sprint archives.

### 9.2. Tipos de Documentación
- **Requisitos y Backlog**: Este documento en Markdown (/docs/backlog.md); versiones con git tags (e.g., v1.0-MVP). Actualiza con cambios en retros; usa prompts para refinar historias/criteria.
- **Decisiones Técnicas (ADR)**: En /docs/adr/ (e.g., adr-001-conexion-db.md): template con contexto, opciones, decisión, consecuencias. Genera con IA para cada épica clave (e.g., "por qué Sequelize sobre Prisma").
- **Código y Tests**: Comments inline con JSDoc; README.md con setup/deploy; /tests con TDD docs (e.g., "este test cubre webhook fallo"). Copilot para auto-generate.
- **Usuario y Admin**: Manuales en /docs/user-guide.md (flujos EJS); dashboard help en vistas.
- **Logs y Auditoría**: Winston para runtime logs; Azure para DB audits; /docs/audit-log.md para summaries regulatorios.
- **IA Contexto**: agents.md con prompts usados (e.g., "prompt para TDD webhook"); NotebookLM cargado con todo para queries como "explica riesgo X".

### 9.3. Procesos de Seguimiento
- **Kanban en Trello**: Boards con columnas (Backlog, To-Do, In-Progress, Review, Done); cards por tarea (de sprints, con labels MoSCoW, puntos, due dates). MCP auto: prompt Claude para "genera tickets de épica 4.3".
- **GitHub Workflow**: Branches por sprint (e.g., sprint-1-db); PRs con reviews auto (Copilot suggestions); issues linked a Trello para bugs.
- **Monitoreo Avances**: Weekly progress: % completado vs. plan (e.g., burndown en Trello); metrics como velocity (puntos/sprint), bug rate <5%.
- **Comunicación**: Reports a jefe via Markdown exports; daily notes en Trello comments.
- **Actualizaciones y Archivos**: Post-retro: update docs con lecciones; archive versiones en git tags.

### 9.4. Métricas y Mejora Continua
- **Calidad Docs**: Cobertura >90% (cada tarea documentada); readability score alto (via tools como Hemingway).
- **Seguimiento Efectivo**: Tasa cierre tickets >95%/sprint; tiempo resolución bugs <1 día.
- **IA en Proceso**: Métrica: >30% docs generados/refinados con IA; retros incluyen "cómo IA ayudó".


