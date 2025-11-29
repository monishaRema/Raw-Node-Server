
import { json } from "stream/consumers";
import { readData, writeData } from "../helper/fileDb";
import parseBody from "../helper/parseBody";
import addRoute from "../helper/routeHandler";
import { sendJson } from "../helper/sendJson";

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
addRoute("POST", "/api/user", async(req, res) => {
  const body = await parseBody(req); // get data from client
  // Data base work

  const user = readData();
  
  const totalUser = user.length;
  const newUser = {
    id:totalUser + 1,
    ...body
  }
  user.push(newUser)

  writeData(user)

  // send response

  sendJson(res, 201, {
    message: "Successfully insert User in the data",
    data: newUser,
    status: 200,
    success: true,
  });
});

// overview page
addRoute("GET", "/user", (req, res) => {
  const userData = readData()


  sendJson(res, 200, {
    message: "welcome to overview page",
    data: userData,
    status: 200,
    success: true,
  });
});
