import * as puppeteer from "puppeteer";

// Rerun test script if a new setup is done as a bug with puppeteer occurs.
test("Runs through a calculation", async () => {
  var expected = "31";
  //Setup cromium browser
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  //Inputs price
  await page.focus("input#price");
  await page.keyboard.type("1");
  //Sets user type
  await page.select("#userType", "Company user");
  //Inputs publish date
  await page.focus("input#publishDate");
  await page.keyboard.type("19000101");

  await page.click("button#calculate");

  const result = await page.$eval("#result", (el) => el.textContent);
  expect(result).toBe(expected);
  await page.waitForTimeout(3000);
  browser.close();
}, 15000);
