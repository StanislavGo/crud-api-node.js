import { config } from "dotenv";
import { usersController } from "./modules/usersController.js";
import http from "http";
config();

const PORT = process.env.PORT;
const USERS_DB = [
  {
    id: "9663c30d-2ab8-40e2-ba85-bdc0ece2e124",
    username: "Stanislav",
    age: 20,
    hobbies: ["Sport", "English"]
  }
];

http.createServer(async (req, res) => {
  await usersController(USERS_DB, req, res);
}).listen(PORT);