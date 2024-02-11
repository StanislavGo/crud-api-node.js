
/**
 * 
 * 1. Get user ID
 * 2. Find user in USERS_DB by ID
 * 3. Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
 * 4. Server should answer with status code 404 and corresponding message if record with id doesn't exist
 * 5. Server should answer with status code 200 and updated record
 * 
 */


const getUserIDtoUpdate = async (USESR_DB, url, res) => {
  const partsOfURL = url.split("/");
  const id = await partsOfURL[partsOfURL.length - 1];
  updateUser(USESR_DB, id, res)
};

const isUUID = async (id) => {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidPattern.test(id);
};

const updateUser = async (USESR_DB, id, res) => {
  console.log(`User ID is ${id}`);
};

export { getUserIDtoUpdate };