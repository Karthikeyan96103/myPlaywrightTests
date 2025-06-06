//import { test, expect, Browser, Page } from "@playwright/test";
//import { chromium, firefox, webkit } from "@playwright/test";
//
//test("check for dropdowns", async () => {
//  const browser = await chromium.launch({ headless: false });
//  const page = await browser.newPage();
//
//  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//  const dropdwn = page.locator(
//    "xpath = //select[@name = 'dropdown-class-example']"
//  );
//
//  await dropdwn.selectOption("option1");
//  expect(dropdwn).toHaveValue("option1");
//  await dropdwn.selectOption("option2");
//  expect(dropdwn).toHaveValue("option2");
//
//  // await dpdOption.click();
//});
