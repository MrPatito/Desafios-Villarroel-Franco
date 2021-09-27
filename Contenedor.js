const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  async save(producto) {
    try {
      //lee archivo para conocer ID
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");

      let productos = [];

      if (contenido === "") {
        producto.id = 1;
        productos.push(producto);
      } else {
        const productList = JSON.parse(contenido);

        producto.id = productList[productList.length - 1].id + 1;
        productList.push(producto);
        productos = productList;
      }

      const productosString = JSON.stringify(productos, null, 2);

      await fs.promises.writeFile(`./${this.file}`, productosString);
      return producto.id;
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");
      const productList = JSON.parse(contenido);

      return productList;
    } catch (error) {
      console.error("error: ", error);
    }
  }
  async deleteById(id) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");
      let productos = [];
      const productList = JSON.parse(contenido);

      productos = productList;

      productos.forEach((producto, index) => {
        if (producto.id === id) {
          productos.splice(index, 1);
          console.log(`Elemento ${producto.id} eliminado`);
        }
      });
      const productosString = JSON.stringify(productos, null, 2);

      await fs.promises.writeFile(`./${this.file}`, productosString);
    } catch (error) {
      console.error("error: ", error);
    }
  }
  async getById(idToGet) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8");
      let productos = [];
      console.log(productos);
      const productList = JSON.parse(contenido);
      console.log("asdasd");
      // console.log(productList);
      productos = productList;
      return productos[`${idToGet - 1}`];
    } catch (error) {
      console.error("error: ", error);
    }
  }
  async deleteAll() {
    try {
      await fs.promises.writeFile(`./${this.file}`, "");
    } catch (error) {
      console.error("error: ", error);
    }
  }
}

module.exports = Contenedor;
