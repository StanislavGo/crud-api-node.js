const getAllUsers = async (USERS_DB, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(USERS_DB));
};

export { getAllUsers };