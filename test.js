const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("./productos.json");
console.log(contenedor);

const productoUno = {
  name: "Zenit",
  watts: 300,
  components: ["cables", "leds", "botones"],
};

contenedor.save(productoUno);
