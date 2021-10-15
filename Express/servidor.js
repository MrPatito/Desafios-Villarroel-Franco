const express = require("express");

const Contenedor = require("./Contenedor");
const contenedor = new Contenedor("./productos.json");

const app = express();

const PORT = 8080;

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//EndPoin inicial
const PATH = "/";
const callback = (request, response, next) => {
  response.send({ mensaje: "HOLA QUE TUL?" });
};

app.get(PATH, callback);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//

//Enpoint Productos
app.get("/productos", async (req, res) => {
  const productos = await contenedor.getAll();
  console.log("productos: ", productos);
  res.json(productos);
});

//Endpoint RandomProducts
app.get("/productoRandom", async (req, res) => {
  const productos = await contenedor.getAll();
  const idRandom = randomNum(0, productos.length - 1);
  console.log(idRandom);
  console.log("producto: ", productos[idRandom]);
  res.json(productos[idRandom]);
});

//Prueba contador de visitas
let counter = 0;
app.get("/visitas", (req, res) => {
  counter++;
  res.send(`<h1>la cantidad de visitas es: ${counter}</h1>`);
});

// //querys
// app.get("/api/casa", (req, res) => {
//   console.log(req.query.clave);
//   console.log(req.query.solo);
//   res.send(req.query);
// });

// //params
// app.get("/api/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send(req.params);
// });

//post
let frase = "prueba de frase";
app.post("/api/nombre", (req, res) => {
  res.send(frase);
});

//put
app.put("/api/nombre/:id", (req, res) => {
  res.send("as");
});

//Encendido de Server
const callbackInit = () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
};
app.listen(PORT, callbackInit);

app.on("error", (error) => console.log(`Error en el servidor ${error}`));
