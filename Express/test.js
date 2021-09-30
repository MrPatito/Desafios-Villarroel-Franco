const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("./productos.json");

const productoUno = {
  name: "Catilo",
  watts: 800,
  components: ["cables", "leds", "botones"],
};

let idAEliminar = 3;
let idAObtener = 2;
const main = async () => {
  // const id = await contenedor.save(productoUno);
  // console.log(id);
  //
  const getId = await contenedor.getById(idAObtener);
  console.log(getId);
  //
  // const list = await contenedor.getAll();
  // console.log(list);
  //
  // const deleteById = await contenedor.deleteById(idAEliminar);
  //
  // const deleteal = await contenedor.deleteAll();
  // console.log("all deleted");
};
main();
