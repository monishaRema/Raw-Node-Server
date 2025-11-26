import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;

    if (url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Welcome to the Home Page",
          status: "success",
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
