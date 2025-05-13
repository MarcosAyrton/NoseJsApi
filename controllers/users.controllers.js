const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../db/users.json");

const llamarUsuarios = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

let usuarios = llamarUsuarios();

const guardarUsuarios = (usuarios) => {
  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
};

//METODOS

const getUsers = (req, res) => {
  res.json({ data: usuarios, status: 200, message: "usuarios obtenidos correctamente" });
};

const getOneUser = (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) return res.json({ status: 404, message: "usuario no encontrado" });
  res.json({ status: 200, message: "usuario encontrado", data: usuario });
};

const createUser = (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre: req.body.nombre,
    email: req.body.email,
    edad: req.body.edad,
  };
  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);
  res.json({ status: 201, message: "usuario creado correctamente", data: nuevoUsuario });
};

const updateUser = (req, res) => {
  const { nombre, email, edad } = req.body;
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario) {
    return res.json({ status: 404, message: "usuario no encontrado" });
  }
  usuario.nombre = nombre;
  usuario.email = email;
  usuario.edad = edad;
  guardarUsuarios(usuarios);
  res.json({ status: 200, message: "usuario editado correctamente", data: usuario });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  usuarios = usuarios.filter((u) => u.id !== id);

  guardarUsuarios(usuarios);
  res.json({ mensaje: `Usuario con ID ${id} eliminado correctamente` });
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
