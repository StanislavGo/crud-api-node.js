import { getAllUsers } from "./getAllUsers.js";
import { getUserID } from "./getUserByID.js";
import { postUser } from "./postUser.js";

const usersController = async (USERS_DB, req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    await getAllUsers(USERS_DB, res);
  } else if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const ulr = req.url;
    await getUserID(USERS_DB, ulr, res);
  } else if (req.method === "POST" && req.url.startsWith("/api/users")) {
    postUser(USERS_DB, req, res);
  }
};

export { usersController };