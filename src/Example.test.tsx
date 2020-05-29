import { Room } from "colyseus.js";

test("this should work", () => {
  const room = new Room("name");
  expect(room).toBeDefined();
});
