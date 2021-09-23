const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("./productos.json");

const productoUno = {
  name: "Zenitas",
  watts: 300,
  components: ["cables", "leds", "botones"],
};

const main = async () => {
  //   const id = await contenedor.save(productoUno);
  //   console.log(id);
  //   const list = await contenedor.getAll();
  //   console.log(list);
  await contenedor.deleteAll();
  console.log("all deleted");
};
main();
