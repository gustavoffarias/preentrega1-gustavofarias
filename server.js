import express from "express";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

try {
  //primero, creo el server
  const server = express();
  //segundo, creamos un puerto local para el servidor backend
  const port = 8000;
  //tercero, definimos una callback que se ejecutara cuando se inicia el servidor
  const ready = () => console.log("PORT SERVER " + port);
  //cuarto, iniciamos el servidor, con listen escuchamos el puerto de la variable "port" para iniciar el server, luego ejecutamos la callback
  server.listen(port, ready);

  //obligo a mi servidor a usar morgan: middleware de terceros (registro de solicitudes)
  server.use(morgan("dev"));
  //habilita la lectura de datos complejos en la url
  server.use(express.urlencoded({ extended: true }));
  //activo funcionabilidad de json
  server.use(express.json());
  //middleware: hago que se crucen los origenes de los puertos de back con los de front
  server.use(cors());
  server.use("/public", express.static("public"));

  //hace que mi servidor use las rutas del enrutador
  server.use(router);
  server.use(errorHandler);
  server.use(pathHandler);
} catch (e) {
  console.log(e);
}
