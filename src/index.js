import { config } from "dotenv";
import { usersController } from "./modules/usersController.js";
import http from "http";
config();

export function changeUSERS_DB(NewUsers_DB) {
  USERS_DB = NewUsers_DB;
  console.log(USERS_DB);
}

const PORT = process.env.PORT;
let USERS_DB = [];

http.createServer(async (req, res) => {
  await usersController(USERS_DB, req, res);
}).listen(PORT);