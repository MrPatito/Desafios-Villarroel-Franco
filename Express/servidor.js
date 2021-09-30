// const express = require("express");
// const server = express();
// const { request } = require("http");

// const PORT = 8080;

// const PATH = "/";
// const callback = (request, response, next) => {
//   response.send({ mensaje: "HOLA QUE TUL?" });
// };
// server.get(PATH, callback);

// const callbackInit = () => {
//   console.log("Server init");
// };
// server.listen(PORT, callbackInit);

// server.on("error", (error) => console.log(`Error en el servidor ${error}`));

//
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

//Encendido de Server
const callbackInit = () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
};
app.listen(PORT, callbackInit);

app.on("error", (error) => console.log(`Error en el servidor ${error}`));
