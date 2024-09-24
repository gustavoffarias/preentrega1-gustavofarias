import { Router } from "express";
import apiRouter from "./api/index.api.js";


const router = Router() 

router.use("/api", apiRouter)
//aca va el view router:
//router.use("/", viewRouter)



async function handleRequest(req, res) {
  //la ruta, el endpoint
  const url = req.url; 
  //options: text/plain es de formato json
  const opts = { "Content-Type": "text/plain" }; 
  switch (url) {
    case "/":
      res.writeHead(200, opts).end("API CONNECTED");
      break
    case "/products":
      const data = await productsManager.readAll();
      res.writeHead(200, opts).end(JSON.stringify(data));
      break
    case "/products/create":
      const one = { title: "producto", price: 20000 };
      const id = await productsManager.create(one);
      return res.writeHead(201, opts).end(JSON.stringify(id));

    default:
      res.writeHead(404, opts).end("ENDPOINT NOT FOUND");
  }
}




export default router;