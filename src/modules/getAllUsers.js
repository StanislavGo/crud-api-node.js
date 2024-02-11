const getAllUsers = async (USERS_DB, res) => {
  if(res) {
    res.writeHead(200);
    const allUsers = USERS_DB.map(user => JSON.stringify(user, null, 3)).join("\n");
    res.end(`[\n${allUsers}\n]`);
  } else {
    return [];
  }
};

export { getAllUsers };