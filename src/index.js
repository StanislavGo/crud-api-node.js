import { config } from "dotenv";
import { usersController } from "./modules/usersController.js";
import http from "http";
config();

export function changeUSERS_DB(NewUsers_DB) {
  USERS_DB = NewUsers_DB;
  console.log(USERS_DB);
}

const PORT = process.env.PORT;
let USERS_DB = [
  {
    id: "9663c30d-2ab8-40e2-ba85-bdc0ece2e124",
    username: "Stanislav",
    age: 20,
    hobbies: ["Sport", "English"]
  },
  {
    id: "620a7819-548c-4be6-aec9-b959c7494c19",
    username: "Dan",
    age: 21,
    hobbies: []
  },
  {
    id: "ef43df4a-f35f-46fb-ac48-8fe3cbee1d37",
    username: "Max",
    age: 22,
    hobbies: []
  }
];

http.createServer(async (req, res) => {
  await usersController(USERS_DB, req, res);
}).listen(PORT);