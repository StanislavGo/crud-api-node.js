const getUserID = async (USERS_DB, url, res, req) => {
  const partsOfURL = url.split("/");
  const id = await partsOfURL[partsOfURL.length - 1];
  return id;
};

module.exports = getUserID;