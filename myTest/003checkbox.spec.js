//import { test, Browser, Page, expect } from "@playwright/test";
//import { chromium, firefox, webkit } from "@playwright/test";
//import path from "path";
//
//test("check for checkbox", async () => {
//  const browser = await chromium.launch({ headless: false });
//  const page = await browser.newPage();
//
//  const chekTitle = await page
//    .locator("xpath = //legend[test(), 'Checkbox Example']")
//    .innerText();
//  console.log(chekTitle);
//
//
//  const chkooption2 = page.locator(
//    "xpath = //label/input[contains (text(), 'Option2')]"
//  );
//     await expect(chkooption2).toBeInViewport();
//     console.log(isClickable);
//     expect(chkooption2).isChecked();
//});
