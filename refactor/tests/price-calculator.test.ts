import calculatePrice from "./../price-calculator";

test("should calculate new product published today correctly", () => {
  var expected = 16;
  var actual = calculatePrice(0, 0, 1, new Date());
  expect(expected).toBe(actual);
});
test("should calculate new product published in the past correctly", () => {
  var expected = 26;
  var actual = calculatePrice(0, 0, 1, new Date(1900, 1, 1));
  expect(expected).toBe(actual);
});
test("should calculate old product published today correctly", () => {
  var expected = 36;
  var actual = calculatePrice(0, 1, 1, new Date());
  expect(expected).toBe(actual);
});

test("should calculate new product published today correctly", () => {
  var expected = 11;
  var actual = calculatePrice(1, 0, 1, new Date());
  expect(expected).toBe(actual);
});
test("should calculate new product published in the past correctly", () => {
  var expected = 21;
  var actual = calculatePrice(1, 0, 1, new Date(1900, 1, 1));
  expect(expected).toBe(actual);
});
test("should calculate old product published today correctly", () => {
  var expected = 31;
  var actual = calculatePrice(1, 1, 1, new Date());
  expect(expected).toBe(actual);
});
