const getUserID = require("../src/modules/getUserId.js");

test("should get 9663c30d-2ab8-40e2-ba85-bdc0ece2e124 from /api/users/9663c30d-2ab8-40e2-ba85-bdc0ece2e124", async () => {
  const path = "/api/users/9663c30d-2ab8-40e2-ba85-bdc0ece2e124";
  const result = await getUserID(null, path);
  expect(result).toBe("9663c30d-2ab8-40e2-ba85-bdc0ece2e124");
});