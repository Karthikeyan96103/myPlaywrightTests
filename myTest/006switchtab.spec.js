import { test, Expect, Browser, Page, context } from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

test("check for switchWindoe", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  console.log("parent Window Title : ", await page.title());
  const switchTab = page.locator("xpath = //a[@id='opentab']");
  //   await switchTab.click();
  await page.waitForTimeout(5000);

  const [newTab] = await Promise.all([
    context.waitForEvent("page"),
    switchTab.click(),
  ]);
  console.log("parent tab Title : ", await newTab.title());
  const allPages = page.context().pages();
  console.log(`Total open tabs: ${allPages.length}`);

  await newTab.bringToFront();
  await newTab.close();
  console.log("parent tab Title : ", await page.title());
  await browser.close();
});
