import { Router } from "express";
import { getAllProducts, createGet, getProduct, update, deleteProduct, create } from "../../controllers/products.controller.js";
import validData from "../../middlewares/validData.mid.js";

const productsRouter = Router()

//rutas
productsRouter.get("/", getAllProducts)
productsRouter.get("/:title/:category/:price", createGet)
productsRouter.get("/:pid", getProduct)
// Ruta para actualizar
productsRouter.put("/:pid", update); 
// Ruta para eliminar
productsRouter.delete("/:pid", deleteProduct); 
// Ruta par crear un producto
productsRouter.post("/", validData, create)


export default productsRouter