import { config } from "dotenv";
import { getAllUsers } from "./modules/getAllUsers.js";
import http from "http";
config();

const PORT = process.env.PORT;
const USERS_DB = [];

http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    await getAllUsers(USERS_DB, res);
  }
}).listen(PORT);