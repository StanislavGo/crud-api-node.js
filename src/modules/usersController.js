import { getUserIDToDelete } from "./deleteUser.js";
import { getAllUsers } from "./getAllUsers.js";
import { getUserID } from "./getUserByID.js";
import { postUser } from "./postUser.js";
import { getUserIDtoUpdate } from "./updateUser.js";

const usersController = async (USERS_DB, req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    await getAllUsers(USERS_DB, res);
  } else if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const url = req.url;
    await getUserID(USERS_DB, url, res);
  } else if (req.method === "POST" && req.url.startsWith("/api/users")) {
    postUser(USERS_DB, req, res);
  } else if (req.method === "PUT" && req.url.startsWith("/api/users/")) {
    const url = req.url;
    getUserIDtoUpdate(USERS_DB, url, res);
  } else if (req.method === "DELETE" && req.url.startsWith("/api/users/")) {
    const url = req.url;
    getUserIDToDelete(USERS_DB, url, res, req);
  } else {
    console.log("Wrong path")
  }
};

export { usersController };