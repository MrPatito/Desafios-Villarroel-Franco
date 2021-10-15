const http = require("http");

const server = http.createServer((req, res) => {
  res.end(() => {
    res.end("asdasdasd");
    // const hours = new Date().getHours(); //Hora de la solicitud

    // if (hours > 6 && hours >= 12) {
    //   res.end("buenos dias");
    // } else if (hours > 13 && hours <= 19) {
    //   res.end("Buenas tardes");
    // } else {
    //   res.end("Buenas noches");
    // }
  });
});

const serverCon = server.listen(8090, () => {
  console.log(`server funca ${serverCon.address().port}`);
});
