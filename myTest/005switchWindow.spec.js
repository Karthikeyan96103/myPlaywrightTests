import { test, Expect, Browser, Page, context } from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test("check for switchWindoe", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log("parent Window Title : ", await page.title());
  const switchWind = page.locator("xpath = //button[@id='openwindow']");
  //   await switchWind.click();
  //   await page.waitForTimeout(5000);

  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    switchWind.click(),
  ]);

  await newWindow.waitForLoadState();
  console.log("new Window Title : ", await newWindow.title());
  await newWindow.close();

  await page.bringToFront();
//  console.log("parent Window Title : ", await page.title());

  await browser.close();
});
