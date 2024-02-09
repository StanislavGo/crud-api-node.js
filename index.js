import { config } from "dotenv";
import http from "http";
config();

const PORT = process.env.PORT;
const USERS_DB = [];

http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    res.writeHead(200);
    res.end(JSON.stringify(USERS_DB));
  }
}).listen(PORT);