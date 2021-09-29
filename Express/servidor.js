const Contenedor = require("../Contenedor");

const contenedor = new Contenedor("../productos.json");

const express = require("express");

const app = express();

const PORT = 8080;

let idAObtener = function (min, max) {
  return math.random() * (1 - 4) + min;
};

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en el servidor ${error}`));

app.get("/productos", (req, res) => {
  const list = contenedor.getAll();
  res.send({ list: "asdasd" });
});

app.get("/productosRandom", (req, res) => {
  const getId = contenedor.getById(idAObtener);
  res.send(getId);
});
