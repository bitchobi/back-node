# 🟢 node-test

> Backend con **Node.js + Express** — CRUD con Validaciones  
> Clase 35 — Grupo iDT

---

## 📋 Descripción

Servidor RESTful construido con Node.js y Express siguiendo el patrón **MVC**.  
Incluye un CRUD completo de usuarios almacenado en memoria, con validación de datos usando `express-validator`.

---

## 📁 Estructura del Proyecto

```
node-test/
├── controllers/
│   └── userController.js    # Lógica de negocio (CRUD en memoria)
├── routes/
│   └── userRoutes.js        # Endpoints + validaciones
├── views/
│   └── listado.html         # Vista HTML (opcional)
├── app.js                   # Configuración de Express y middlewares
├── index.js                 # Punto de entrada del servidor
└── package.json
```

---

## ⚙️ Requisitos Previos

- Node.js v18 o superior (recomendado v20 LTS)
- npm (incluido con Node.js)
- WSL Ubuntu (para usuarios de Windows)

---

## 🚀 Instalación

### 1. Instalar Node.js en WSL Ubuntu

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Recargar perfil
source ~/.bashrc

# Instalar Node.js v20
nvm install 20

# Verificar
node -v && npm -v
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor

```bash
npm start
```

El servidor quedará corriendo en `http://localhost:3000`

---

## 📦 Dependencias

| Paquete | Versión | Descripción |
|---|---|---|
| `express` | ^5.1.0 | Framework web para Node.js |
| `cors` | ^2.8.5 | Habilita Cross-Origin Resource Sharing |
| `express-validator` | ^7.2.1 | Middleware de validación |

---

## 🛠️ Endpoints de la API

Base URL: `http://localhost:3000`

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/users` | Lista todos los usuarios |
| `POST` | `/users` | Crea un nuevo usuario |
| `GET` | `/users/:id` | Obtiene un usuario por ID |
| `PUT` | `/users/:id` | Actualiza un usuario existente |
| `DELETE` | `/users/:id` | Elimina un usuario |

---

## ✅ Validaciones

Las rutas `POST /users` y `PUT /users/:id` validan el body antes de ejecutar el controlador.

| Campo | Regla |
|---|---|
| `nombre` | Requerido, no puede estar vacío |
| `email` | Requerido, debe ser un email válido |

**Ejemplo de error (400):**

```json
{
  "errores": [
    {
      "type": "field",
      "msg": "El nombre es obligatorio",
      "path": "nombre",
      "location": "body"
    }
  ]
}
```

---

## 💡 Ejemplos de Uso

### Listar usuarios
```bash
curl http://localhost:3000/users
```

### Crear usuario
```bash
curl -X POST http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{"nombre": "Maria", "email": "maria@idt.com"}'
```

### Actualizar usuario
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H 'Content-Type: application/json' \
  -d '{"nombre": "Maria Actualizada", "email": "maria@idt.com"}'
```

### Eliminar usuario
```bash
curl -X DELETE http://localhost:3000/users/1
```

---

## 🏗️ Arquitectura MVC

| Capa | Archivo | Responsabilidad |
|---|---|---|
| Rutas | `routes/userRoutes.js` | Define endpoints y aplica validaciones |
| Controlador | `controllers/userController.js` | Lógica del CRUD en memoria |
| App | `app.js` | Middlewares globales y registro de rutas |
| Entry Point | `index.js` | Inicia el servidor en el puerto 3000 |

---

## ⚠️ Notas Importantes

> **Almacenamiento en memoria:** Los datos se guardan en un array JavaScript mientras el servidor está corriendo. Al detener el proceso (`Ctrl+C`), todos los usuarios creados se pierden. Esta es la implementación esperada para la práctica de la Clase 35, sin base de datos.

**Flujo correcto para probar PUT/DELETE:**
1. Primero crear el usuario con `POST /users`
2. Usar el `id` devuelto en la respuesta
3. Luego llamar a `PUT /users/:id` o `DELETE /users/:id` con ese ID

**Herramientas recomendadas para probar la API:**
- [Insomnia](https://insomnia.rest/)
- Thunder Client (extensión de VS Code)
- `curl` desde la terminal

---

## 👨‍💻 Autor

Desarrollado como práctica del curso **Backend con Node.js y Express**  
**Grupo iDT** — Instituto Técnico Superior — Asunción, Paraguay