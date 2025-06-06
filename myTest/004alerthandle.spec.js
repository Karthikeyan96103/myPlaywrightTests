//import { test, Browser, Page, Expect, Dialog } from "@playwright/test";
//import { chromium, firefox, webkit } from "@playwright/test";
//
//test("check for Alerts", async () => {
//  const browser = await chromium.launch({ headless: false });
//  const context = await browser.newContext({
//    // recordVideo: { dir: "videos/" }, // Force storing videos in "videos/" directory
//  });
//  const page = await context.newPage();
//  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//  const enterName = page.locator("xpath = //input[@name = 'enter-name']");
//  await enterName.fill("karthik");
//  const alertButton = page.locator("xpath = //input[@value = 'Confirm']");
//
//  page.on("dialog", async (dialog) => {
//    console.log(`Alert message: ${dialog.message()}`);
//    await page.waitForTimeout(5000);
//    await dialog.accept(); // Accept the alert
//  });
//  await page.waitForTimeout(2000);
//  await alertButton.click(); // Trigger the alert
//  await page.waitForTimeout(5000);
//  //   await page.screenshot({ path: "alertSs.png" });
//  await context.close();
//});
