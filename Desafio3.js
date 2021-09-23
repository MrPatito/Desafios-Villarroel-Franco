const fs = require("fs");

class file {
  constructor(file) {
    this.file = file;
  }
  save(object) {
    fs.appendFile(this.file, object);
  }
}
const casa = new file("archivoNuevo");
let casa1 = { 1: "techo", 2: "puerta", 3: "ventana" };

casa.save(casa1);
