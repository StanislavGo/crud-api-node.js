const getAllUsers = require("../src/modules/getAllUsers");

test("getAllUsers function should return empty object", async () => {
  const result = await getAllUsers();
  expect(result).toStrictEqual([]);
});