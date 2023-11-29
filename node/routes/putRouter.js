const { editCar } = require("../data/cars");


function putRouter(request, response) {
  switch (request.url) {
    case "/api/catalog/car/edit":
      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });

      request.on("end", () => {
        const dataFromClient = JSON.parse(data);
        const carInfo = editCar(dataFromClient);
        console.log(carInfo);
          if(carInfo == false){
              response.writeHead(404, { "Content-Type": "text/plain" });
              response.end("Err");
              return;
          }
      
          response.writeHead(200, { "Content-Type": "application/json" }); 
          response.end(JSON.stringify(dataFromClient));
      });
      break;

    default:
      response.statusCode = 404;
      response.end("Error");
  }
}

module.exports = putRouter;