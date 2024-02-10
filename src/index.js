import { config } from "dotenv";
import { usersController } from "./modules/usersController.js";
import http from "http";
config();

const PORT = process.env.PORT;
const USERS_DB = [
  {
    id: 1,
    username: "Test1"
  },
  {
    id: 2,
    username: "Test2"
  }
];

http.createServer(async (req, res) => {
  await usersController(USERS_DB, req, res);
}).listen(PORT);