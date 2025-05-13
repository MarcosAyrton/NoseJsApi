

## 🔗 Endpoints

### 📥 GET - Obtener Todos los Usuarios

- **URL:** `http://localhost:3000/api/getUsuarios`
- **Método:** `GET`
- **Descripción:** Retorna una lista de todos los usuarios.

---

### 🔍 GET - Obtener Usuario por ID

- **URL:** `http://localhost:3000/api/getUsuarios/:id`
- **Ejemplo:** `http://localhost:3000/api/getUsuarios/2`
- **Método:** `GET`
- **Descripción:** Retorna los datos del usuario con el ID especificado.

---

### ➕ POST - Crear Usuario

- **URL:** `http://localhost:3000/api/createUsuario`
- **Método:** `POST`
- **Descripción:** Crea un nuevo usuario en la base de datos.

#### 📝 Body (JSON)

```json
{
  "nombre": "Marcos",
  "email": "marcos@gmail.com",
  "edad": "22"
}
```

---

### 📝 PUT - Actualizar Usuario

- **URL:** `http://localhost:3000/api/updateUsuario/:id`
- **Ejemplo:** `http://localhost:3000/api/updateUsuario/4`
- **Método:** `PUT`
- **Descripción:** Actualiza los datos de un usuario existente.

#### 📝 Body (JSON)

```json
{
  "nombre": "juanroberto",
  "email": "juancito@gmail.com",
  "edad": "69"
}
```

---

### ❌ DELETE - Eliminar Usuario

- **URL:** `http://localhost:3000/api/deleteUsuario/:id`
- **Ejemplo:** `http://localhost:3000/api/deleteUsuario/4`
- **Método:** `DELETE`
- **Descripción:** Elimina al usuario con el ID especificado.

---

## ⚙️ Requisitos

- Node.js
- Express


## 🛠️ Instalación

```bash
git clone https://tu-repo.git
cd tu-proyecto
npm install
npm run dev
```

