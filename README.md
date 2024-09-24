<h1>Primera Entrega Backend - Gustavo Farias - Ecommcerce</h1>
<p>Para gestionar products y users, generamos una API REST que almacena los datos en memoria y archivos, utilizando Postman para pruebas. Se implemento el método POST para crear un nuevo producto/usuario (se valida el proceso, si es exitoso, se guarda y se muestra el id). Con GET leemos y mostramos (por medio del ID) datos almacenados. Con PUT modificamos propiedades de los datos. Con DELETE eliminamos un objeto, filtrando por id.</p>
<p>Para consultar los products o user, una vez iniciado el servidor en el puerto de referencia (8000), ingresamos en nuestro navegador:</p>
<p>http://localhost:8000/api/users/
<br>http://localhost:8000/api/products/</p>
<p>Adicionalmente, se agrego un metodo GET para crear productos desde el navegador, sin unsar Postman. Puede consultar el archivo products.api.js par verificar el uso de rutas, alli tambien se acalara a modo de ejemplo el uso del GET para craar un objeto.</p>
<p>Para el manejo de errores (rutas no encontradas y validaciones), se implemento middleware.</p>
