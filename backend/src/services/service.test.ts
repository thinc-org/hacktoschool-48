import { connectToDatabase } from "./mongoose.service";

describe("connectToDatabase", () => {
  it("should connect to the MongoDB database", async () => {
    await expect(connectToDatabase()).resolves.toBeUndefined();
  });
});