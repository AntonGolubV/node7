const { addCar } = require("../data/cars"); 
function postRouter(request, response) {
    let data = "";
    switch (request.url) {
      case "/api/catalog/addCar":
        request.on("data", (chunk) => {
          data += chunk;
        });
        console.log(data);
        request.on("end", () => {
          const dataFromClient = JSON.parse(data);
          if(!dataFromClient){
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("Error");
            return;
          }
          
          const newCar = addCar(dataFromClient);
          console.log(newCar);
          if(newCar == false){
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("Error");
            return;
          }
          
  
          response.writeHead(200, { "Content-Type": "application/json" });
          response.end(JSON.stringify(newCar));
        });
        break;
      }
  }
  
  module.exports = postRouter;