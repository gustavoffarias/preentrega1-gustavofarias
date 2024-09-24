import { Router } from "express";
import { createUser, deleteUser, readAllUsers, readUserId, updateUser } from "../../controllers/users.controller.js";
import validDataUsers from "../../middlewares/validDataUsers.mid.js";

const usersRouter = Router()

//rutas de users
usersRouter.get("/", readAllUsers)
usersRouter.get("/:uid", readUserId)
// Ruta para actualizar
usersRouter.put("/:uid", updateUser);
// Ruta para eliminar
usersRouter.delete("/:uid", deleteUser); 
// Ruta para crear 
usersRouter.post("/", validDataUsers, createUser)



export default usersRouter