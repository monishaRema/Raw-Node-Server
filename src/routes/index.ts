import addRoute from "../helper/routeHandler";
import sendJson from "../helper/sendJson";

// Root Route
addRoute("GET", "/", (req, res) => {
  sendJson(res, 200, {
    message: "Successfully get the data",
    data: {},
    status: 200,
    success: true,
  });
});

// User Post Route
addRoute("POST", "/api/user", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const parsedBody = JSON.parse(body);

      res.end(JSON.stringify(parsedBody));
    } catch (err: any) {
      console.log(err?.message);
    }
  });
});

// overview page
addRoute("GET", "/overview", (req, res) => {
  sendJson(res, 200, {
    message: "welcome to overview page",
    data: {},
    status: 200,
    success: true,
  });
});