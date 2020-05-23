import { DI } from "@aurelia/kernel";
describe("environment", () => {
  it("getAsync", async () => {
    const root = DI.createContainer();

    root.get(Envi);
  });
});
