const url = require("url");
const { deleteCarByNumber } = require("../data/cars");

function deleteRouter(request, response) {
  const parsedUrl = url.parse(request.url, true);

  switch (parsedUrl.pathname) {
    case "/api/catalog/car/delete":
      const { number } = parsedUrl.query;
      const carNumber = deleteCarByNumber(number);

      if (!carNumber) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("такой машины нет");
        return;
      }

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end(JSON.stringify(carNumber));  
      break;
  }
}

module.exports = deleteRouter;