# 🟥 **def. Backlog**
**Un backlog es una lista priorizada y viva de todas las tareas, requerimientos y mejoras que un proyecto necesita para alcanzar sus objetivos.**
Se utiliza sobre todo en metodologías ágiles (Scrum/Kanban), pero también como guía práctica en proyectos individuales.

Fuente: [Scrum Guide](https://scrumguides.org/scrum-guide.html)

---

### 🔹 Características clave del backlog

* **Priorizado:** no es una lista caótica, sino ordenada según valor para el negocio o urgencia técnica.
* **Vivo:** se actualiza continuamente (se agregan, dividen o eliminan tareas).
* **Granularidad:** al principio tiene “épicas” o tareas grandes, que se van desglosando en tareas pequeñas (user stories o issues).
* **Visibilidad:** todos los miembros del equipo deben entenderlo.

---

### 🔹 Cómo se define un backlog

1. **Definición del alcance y los objetivos del proyecto.**
   Portal de pagos municipal, que permita a los contribuyentes pagar tasas en línea y registrar los movimientos en la BD de Azure.

2. **Listá todos los requerimientos grandes (épicas).**
   Ejemplos:

   * Conexión segura con la base de datos en Azure.
   * Sistema de autenticación y roles de usuario.
   * Integración con pasarela de pagos.
   * Dashboard administrativo.

3. **Desglosá cada épica en tareas concretas.**
   Ejemplo: “Conexión con la base de datos” →

   * Configurar Sequelize con driver `tedious`.
   * Definir modelos iniciales.
   * Probar CRUD en tabla de pagos.

4. **Priorizá.**
   Se ordena según lo que desbloquea lo demás.
   (Primero conexión BD, después modelos, después CRUD, después pasarela de pagos, etc.).

---

**Lo que se busca es el MVP y desde allí el cumplimiento de las epicas.**

---

