import { toUpperInitial } from "./index";

it("toUpperInitial works correctly", () => {
  expect(toUpperInitial("hello")).toBe("Hello");
  expect(toUpperInitial("abc")).toBe("Abc");
  expect(toUpperInitial("hello world")).toBe("Hello world");
  expect(toUpperInitial(" abc")).toBe(" abc");
  expect(toUpperInitial("123")).toBe("123");
  expect(toUpperInitial(12)).toBe(12);
});
