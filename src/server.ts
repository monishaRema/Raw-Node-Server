import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { routes, RoutHandler } from "./helper/routeHandler";
import sendJson from "./helper/sendJson";

import './routes/index'



const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const path = req.url || ""; // get API endpoints
    const method = req.method?.toUpperCase() || ""; // get API methods
    const methodMap = routes.get(method); // Get method from the map

    // Get method depending on path
    const handler: RoutHandler | undefined = methodMap?.get(path);

    if (handler) {
      handler(req, res);
    } else {
      sendJson(res, 404, {
        message: "No route exists",
        data: {},
        status: 404,
        success: false,
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
