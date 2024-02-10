const getUserID = async (USESR_DB, url, res) => {
  const partsOfURL = url.split("/");
  const id = await partsOfURL[partsOfURL.length - 1];
  getUserByID(USESR_DB, id, res)
};

const getUserByID = async (USESR_DB, id, res) => {
  const user = await USESR_DB.filter((e) => e.id === Number(id));
};

export { getUserID };