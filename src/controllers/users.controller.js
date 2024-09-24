import usersManager from "../data/memory/users.manager.js";

//crear
async function createUser(req, res, next) {
  try {
    const data = req.body;
    const responseManager = await usersManager.createUser(data);
    return res.status(201).json({ message: "USER CREATED", responseManager });
  } catch (error) {
    return next(error);
  }
}

//leer todo
async function readAllUsers(req, res, next) {
  try {
    const response = await usersManager.readAllUsers();
    if (response.length > 0) {
      return res
        .status(200)
        .json({ message: "ALL OUR USERS", users: response });
    } else {
      const error = new Error("ERROR 404, USERS NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    
    next(error);
  }
}

//leer por id
async function readUserId(req, res, next) {
  try {
    const { uid } = req.params;
    const response = await usersManager.readUserId(uid);
    if (response) {
      return res.status(200).json({ message: "USER READ", response });
    } else {
      const error = new Error("ERROR 404, USER NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    
    next(error);
  }
}

//actualizar usuario
async function updateUser(req, res, next) {
  try {
    // Obtener el ID del usuario
    const { uid } = req.params; 
    // Obtener los datos de actualización del cuerpo de la solicitud
    const updateData = req.body; 
    // Llamar al método update de productsManager
    const response = await usersManager.updateUser(uid, updateData); 
    if (response) {
      return res.status(200).json({ message: "USER UPDATED", response });
    } else {
      const error = new Error("ERROR 404, USER NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    
    next(error);
  }
}

//borrar usuario
async function deleteUser(req, res, next) {
  try {
    // Obtener el ID del usuario
    const { uid } = req.params; 
    // Llamar al método delete de usersManager
    const response = await usersManager.deleteUser(uid); 
    if (response) {
      return res.status(200).json({ message: "USER DELETED", response });
    } else {
      const error = new Error("ERROR 404, USER NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    
    next(error);
  }
}

export { createUser, readAllUsers, readUserId, updateUser, deleteUser };