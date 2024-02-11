const getUserID = async (USESR_DB, url, res) => {
  const partsOfURL = url.split("/");
  const id = await partsOfURL[partsOfURL.length - 1];
  getUserByID(USESR_DB, id, res)
};

const isUUID = async (id) => {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
};

const getUserByID = async (USESR_DB, id, res) => {
  let statusCode = 200;
  let responseBody = null;

  const user = await USESR_DB.filter((e) => e.id === id);
  if(await isUUID(id) === false) {
    statusCode = 400;
    responseBody = {
      message: "userId is invalid (not uuid)"
    };
  } else if (user.length === 0) {
    statusCode = 404;
    responseBody = {
      message: "user with id === userId doesn't exist"
    };
  } else {
    responseBody = user;
  }
  res.writeHead(statusCode);
  res.end(JSON.stringify(responseBody, null, 3));
};

export { getUserID };