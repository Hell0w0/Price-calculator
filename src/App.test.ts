import * as puppeteer from "puppeteer";

test("should click around", async () => {
  var expected = "21";
  //Setup cromium browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.type("input#price", "1");
  await page.click("input#userType");
  await page.focus("input#publishDate");
  await page.keyboard.type("19000101");

  await page.click("button#calculate");

  const result = await page.$eval("#result", (el) => el.textContent);
  expect(result).toBe(expected);
}, 15000);
