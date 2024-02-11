const isUUID = require("../src/modules/checkID");

test("getUserIDToDelete should return 'user with id === userId doesn't exist'", async () => {
  const result = await isUUID("9663c30d-2ab8-40e2-ba85-bdc0ece2e124");
  expect(result).toBe(true);
});