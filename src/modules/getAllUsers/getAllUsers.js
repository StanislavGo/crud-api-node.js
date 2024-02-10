const getAllUsers = async (USERS_DB, res) => {
  if(res) {
    res.writeHead(200);
    res.end(JSON.stringify(USERS_DB));
  } else {
    return [];
  }
};

export { getAllUsers };