# 📚 Proyecto Final - Backend con NestJS

Aplicación desarrollada en **NestJS + TypeORM + MySQL** que permite gestionar estudiantes, cursos, profesores, materias y asignaciones en un entorno académico.

---

## 🧾 Contenido

* [Tecnologías](#tecnologías)
* [Instalación](#instalación)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [Conexión Base de Datos](#conexión-base-de-datos)
* [Comandos útiles](#comandos-útiles)
* [Endpoints principales](#endpoints-principales)
* [Relaciones entre entidades](#relaciones-entre-entidades)
* [Autor](#autor)

---

## 🛠 Tecnologías

* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [MySQL](https://www.mysql.com/)
* [Node.js](https://nodejs.org/)

---

## ⚙ Instalación


# Clonar repositorio
git clone https://github.com/Maithe08/proyecto-final.git
cd proyecto-final

# Instalar dependencias
npm install
```

### Crear archivo `.env` con la siguiente configuración:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1234
DB_DATABASE=proyecto_final_db
```

---

## 🗂 Estructura del Proyecto

```
src/
│
├── modules/
│   ├── asignacion/
│   ├── curso/
│   ├── estudiante/
│   ├── materia/
│   └── profesor/
│
├── app.module.ts
└── main.ts
```

---

## 🧩 Conexión Base de Datos

La configuración está en el archivo `.env`. Asegúrate de tener corriendo tu servidor de base de datos MySQL y haber creado la base de datos `proyecto_final_db`.

---

## 🚀 Comandos útiles

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run start:dev

# Formatear el código (opcional)
npm run totalformat

---

## 📌 Endpoints principales y Ejemplos JSON

> Los endpoints funcionan en `http://localhost:3000`

### 📚 Profesores

- **Crear profesor**  
  `POST /profesores`

  ```json
{
  "nombre": "humberto",
  "apellido": "ramirez",
  "especialidad": "sociales",
  "correo": "hm.gomez@example.com"
}

---

### 📘 Materias

- **Crear materia**  
  `POST /materias`  
  Crea una materia y la vincula a un curso mediante un `cursoId`.

```json
{
  "nombre": "Historia Universal",
  "codigo": "HIS101",
  "creditos": 3,
  "cursoId": 1
}
```

- **Obtener materias**  
  `GET /materias`

- **Obtener profesores de una materia**  
  `GET /materias/:id/profesores`

### 🧩 Asignaciones

- **Crear asignación**  
  `POST /asignaciones`

  ```json
  {
  "profesorId": 2,
  "materiaId": 1
  }

- **Obtener asignaciones**  
  `GET /asignaciones`

- **Obtener asignación por ID**  
  `GET /asignaciones/:id`  
  Muestra el profesor y las materias que tiene.

- **Actualizar asignación**  
  `PUT /asignaciones/:id`

  {
  "profesorId": 3,
  "materiaId": 3
  }


### 🏫 Cursos

- **Crear curso**  
  `POST /cursos`

  ```json
  {
  "nombre": "Curso de NestJS",
  "descripcion": "Este curso es para aprender NestJS paso a paso.",
  "duracionHoras": 20
  }
``

- **Obtener cursos con materias y estudiantes**  
  `GET /cursos`  
  Retorna el nombre del curso, los estudiantes asociados y las materias que ofrece.

### 👨‍🎓 Estudiantes

- **Crear estudiante**  
  `POST /estudiantes`  
  Crea el estudiante y lo vincula a uno o varios cursos.

  ```json
  {
  "nombre": "mariana",
  "apellido": "García",
  "correo": "mari@example.com",
  "edad": 16,
  "cursoId": 1
  }

- **Obtener estudiantes**  
  `GET /estudiantes`  
  Muestra el curso o cursos a los que pertenece cada estudiante.


## 🔗 Relaciones entre entidades

* Un **curso** tiene muchos **estudiantes** y muchas **materias**.
* Una **materia** pertenece a un **curso** y puede estar asignada a un **profesor**.
* Un **profesor** puede dar varias materias mediante **asignaciones**.
* Una **asignación** vincula un **profesor** con una **materia**.

---
## ✅ Estado

Proyecto funcional, permite gestionar:

- Profesores asignados a materias
- Materias vinculadas a cursos
- Estudiantes matriculados en cursos
- Relación completa entre cursos, materias y profesores

## 👤 Autor

* **Nombre:** Maithe López Cardona
* **GitHub:** [Maithe08](https://github.com/Maithe08)

---
