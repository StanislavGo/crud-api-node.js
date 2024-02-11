const getUsers = require("../src/modules/getUsers.js");

test("getAllUsers function should return empty object", async () => {
  const result = await getUsers();
  expect(result).toStrictEqual([]);
});