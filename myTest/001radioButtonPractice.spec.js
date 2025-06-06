import { test, Expect, Browser, Page, expect } from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test("check for radio button", async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/#top");
  const Pagetitle = await page.title();
  //   console.log(Pagetitle);
  expect(Pagetitle).toBe("Practice Page");
  //radio button check
  const radioTitleloc = page.locator(
    'xpath = //legend[text() = "Radio Button Example"]'
  );
  const radioTitle = await radioTitleloc.innerText();
  expect(radioTitle).toBe("Radio Button Example");

  const radioOne = page.locator("xpath = //input[@value='radio1']");
  await radioOne.click();
  const isSelected = await radioOne.isChecked();
  expect(isSelected).toBe(true);


  const radioTwo = page.locator("xpath = //input[@value='radio2']");
  await radioTwo.click();
  const isSelected2 = await radioTwo.isEnabled();
  expect(isSelected2).toBe(true);
  expect(await radioOne.isChecked()).toBe(false);
//  console.log("radio2 is selected,radio1 is unselected  ");
});
