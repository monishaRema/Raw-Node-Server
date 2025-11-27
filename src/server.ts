import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import addRoute, { routes, RoutHandler } from "./helper/routeHandler";

addRoute("GET", "/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Welcome to the Home Page",
      status: "success",
    })
  );
});

addRoute("POST", "/api/user", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const parsedBody = JSON.parse(body);
      console.log(body, parsedBody);

      res.end(JSON.stringify(parsedBody));
    } catch (err: any) {
      console.log(err?.message);
    }
  });
});

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const path = req.url || "";
    const method = req.method?.toUpperCase() || "";

    const methodMap = routes.get(method);

    const handler: RoutHandler | undefined = methodMap?.get(path);

    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Not found page",
          status: 404,
          success: false,
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
