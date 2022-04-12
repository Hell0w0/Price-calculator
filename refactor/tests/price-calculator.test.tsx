import { render } from "react-dom";
import {
  checkRebateRules,
  calculatePrice,
} from "../calculator-app/calculator-app";

test("should get rabate rate for new product published today correctly", () => {
  var expected = 10;
  var actual = checkRebateRules(0, "Normal", "New", new Date());
  expect(actual).toBe(expected);
});

test("should get rabate rate for a company user correctly", () => {
  var expected = 5;
  var actual = checkRebateRules(0, "Company user", "Old", new Date());
  expect(actual).toBe(expected);
});
test("should get rabate rate for a company user with new product published today correctly", () => {
  var expected = 15;
  var actual = checkRebateRules(0, "Company user", "New", new Date());
  expect(actual).toBe(expected);
});

test("should calculate new product published today correctly", () => {
  var expected = 16;
  const actual = calculatePrice(1, "Normal", "New", new Date());
  expect(expected).toBe(actual);
});

test("should calculate new product published in the past correctly", () => {
  var expected = 26;
  var actual = calculatePrice(1, "Normal", "New", new Date(1900, 1, 1));
  expect(expected).toBe(actual);
});

test("should calculate old product published today correctly", () => {
  var expected = 36;
  var actual = calculatePrice(1, "Normal", "Old", new Date());
  expect(expected).toBe(actual);
});

test("should calculate new product published today correctly", () => {
  var expected = 11;
  var actual = calculatePrice(1, "Company user", "New", new Date());
  expect(expected).toBe(actual);
});
test("should calculate new product published in the past correctly", () => {
  var expected = 21;
  var actual = calculatePrice(1, "Company user", "New", new Date(1900, 1, 1));
  expect(expected).toBe(actual);
});
test("should calculate old product published today correctly", () => {
  var expected = 31;
  var actual = calculatePrice(1, "Company user", "Old", new Date());
  expect(expected).toBe(actual);
});
