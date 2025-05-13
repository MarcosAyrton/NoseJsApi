const express = require("express");
const router = express.Router();

const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require("../controllers/users.controllers");

router.get("/getUsuarios", getUsers);
router.get("/getUsuarios/:id/", getOneUser);
router.post("/createUsuario", createUser);
router.put("/updateUsuario/:id/", updateUser);
router.delete("/deleteUsuario/:id/", deleteUser);

module.exports = router;
