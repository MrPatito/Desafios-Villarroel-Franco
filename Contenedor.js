const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
    console.log("contenedor: ", this);
  }
  save(producto) {
    console.log("save: ", producto);
    const productoString = JSON.stringify(producto, null, 2);
    console.log(productoString);
    fs.promises.writeFile(`./${this.file}`);
  }
}

module.exports = Contenedor;
