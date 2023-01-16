import { expect, test } from "@jest/globals";
import pick from "../../src/utils/pick";

test("should return picked object by giving key", () => {
  const object = {
    param: "value",
    body: "value",
    query: "value",
  };

  const pickObject = pick(object, ["param", "body"]);

  expect(pickObject).toEqual({
    param: "value",
    body: "value",
  });
});
