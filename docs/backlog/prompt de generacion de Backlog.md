## Roles de la IA:
Actúa como los sigueintes roles todos juntos: 
Product Owner (define visión y prioriza con MoSCoW), 
Technical Lead (valida viabilidad técnica del stack), 
AI Integration Specialist (integra herramientas IA: GitHub Copilot, MCP, automatizaciones)
Agile Coach (estructura en épicas/sprints con puntos de esfuerzo)
Technical Writer (documenta en Markdown). 
Genera un backlog profesional asegurando coherencia entre requerimientos, tecnología y metodología ágil.

## Encabezado optimizado para NotebookLM

> **Asume los siguientes roles combinados para generar un backlog profesional y completo:**
>
> **Product Owner (PO):** Define la visión, los objetivos del portal de pagos municipales y prioriza las tareas usando MoSCoW. Garantiza que el backlog mantenga coherencia con los requerimientos del usuario final (municipalidad y contribuyentes).
>
> **Technical Lead / Full-Stack Developer:** Asegura que cada historia y tarea sea técnicamente viable con el stack base (Node.js, Express.js, EJS, SQL Azure, GitHub, VSCode, HTML, SCSS, Sequelize ORM). Incluye dependencias, riesgos técnicos y recomendaciones de buenas prácticas.
>
> **AI Integration Specialist:** Integra de forma natural tareas y subtareas relacionadas con el uso de herramientas de inteligencia artificial en el flujo de desarrollo (GitHub Copilot, MCP, Trello con automatizaciones, prompts para documentación y TDD guiado).
>
> **Agile Coach / Scrum Master:** Estructura el backlog bajo principios ágiles. Divide las historias en épicas, sprints de 1 a 2 semanas y asigna puntos de esfuerzo (1–5). Asegura claridad entre Product Backlog y Sprint Backlogs.
>
> **Technical Writer:** Entrega el backlog en formato **Markdown limpio y estructurado**, con las siguientes secciones bien diferenciadas:
>
> * Visión y objetivos del producto
> * Arquitectura y tecnologías
> * Épicas con historias de usuario
> * Criterios de aceptación en estilo Gherkin (Given/When/Then)
> * Priorización MoSCoW
> * Planificación temporal (sprints, puntos de esfuerzo, dependencias)
> * Riesgos y mitigaciones
> * Documentación y seguimiento
>
> **Estilo de respuesta:** Profesional, técnico, coherente y exhaustivo. Cada sección debe estar desarrollada al máximo nivel de detalle, con formato ordenado, títulos claros y sin omitir pasos intermedios.
>
> Si la extensión es muy larga, dividí la salida en entregas secuenciales (por ejemplo: Parte 1 – Visión y Arquitectura; Parte 2 – Épicas e Historias; Parte 3 – Criterios, MoSCoW, Riesgos).


Basado en las fuentes cargadas –incluyendo la conversación completa con Alice (donde se detalla el proyecto de portal de pagos municipales, stack base Node.js/Express.js con EJS/MVC/SQL/Azure/Git/GitHub/VSCode/HTML/CSS con SCSS, y metas de aplicar principios de desarrollo con IA de manera natural en el flujo), el backlog incompleto en Markdown, el CV de Dante Delprato (para adaptar a tecnologías conocidas como Sequelize para ORM, React básico y metodologías ágiles), los apuntes PDFs de Día 1 y Día 2 (para guiar conceptos como bases de conocimiento, ingeniería de prompts y TDD/seguridad de forma orgánica, sin referencias directas), y el repo de ejemplo Hyperswitch en GitHub (https://github.com/juspay/hyperswitch, que está en Rust pero debe adaptarse conceptualmente a JavaScript/Node.js sin cambiar el stack base)– genera un backlog completo en formato Markdown para un portal de pagos municipales compartiendo la base de datos con ALCALD+IA.
El portal es exclusivo para Argentina, con pagos en pesos argentinos, integrando plataformas populares como BNA+, Naranja X y Mercado Pago; empieza con Mercado Pago y Naranja X para MVP si la integración completa es compleja.

Incluye todas las secciones de manera profesional y accionable: 
- Visión y requerimientos generales (expandiendo lo existente, con foco en MVP y extendido).
- Arquitectura y tecnologías (priorizando stack base con Sequelize para ORM; menciona Prisma solo post-MVP si estrictamente necesario por seguridad, como opción óptima en industria).
- Épicas detalladas con historias de usuario en formato 'Como [rol], quiero [acción], para [beneficio]'.
- Criterios de aceptación en estilo Gherkin (Given-When-Then) para cada historia.
- Prioridades con MoSCoW (Must-have para MVP, Should/Could para extendido).
- Planificación temporal con sprints de 1-2 semanas, estimaciones en puntos de esfuerzo (1-5, considerando nivel junior autodidacta), e integrando tareas para uso de herramientas de desarrollo con IA como parte natural de las actividades (e.g., implementar un servidor MCP en Trello para generación automática de tareas, listas y tickets con Claude).
- Riesgos y mitigaciones (técnicos como integraciones con fintechs, y de negocio como cumplimiento regulatorio).
- Documentación y seguimiento (usando Markdown/GitHub y Trello para tickets/Kanban, integrando IA naturalmente como prompts para generar requisitos o TDD guiado, y recalcando GitHub Copilot integrada en VSCode como herramienta principal de IA para el desarrollo diario, manejando todo desde allí).

Enfócate en un backlog de punta a punta para el proyecto real: consulta deudas, generación QR multi-wallet (MercadoPago, etc.), registro pagos vía webhook, actualización Azure SQL, autenticación, dashboard admin y escalado. Integra principios de IA de forma natural en el proceso (e.g., usar prompts en GitHub Copilot para refinar código o TDD), como parte estándar del desarrollo. Asegura que sea práctico para un dev junior, con sugerencias de mini-proyectos para aplicar en sprints, y estructurado para extraer fácilmente los sprints.
