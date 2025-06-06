// import test from "node:test";
import { test, expect } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";
import { beforeEach } from "node:test";

test("login test", async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const browserContextOne = await browser.newContext();
  const browserContextTwo = await browser.newContext();
  //context one
  const pageOne = await browserContextOne.newPage();
  await pageOne.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const userNameLocator = pageOne.locator("#input-email");
  const passwordLocator = pageOne.locator("#input-password");
  const submitbtnLocator = pageOne.locator("[value = 'Login']");

  await userNameLocator.fill("pwtest@opencartcom");

  await passwordLocator.fill("playwright@123");
  await submitbtnLocator.click();

  const homePageTitle = await pageOne.title();
  console.log("the Observed title is : " + homePageTitle);
  expect(homePageTitle).toBe("Account Login");

  // context Two
  const pageTwo = await browserContextTwo.newPage();
  await pageTwo.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );

  const userNameLocator2 = pageTwo.locator("#input-email");
  const passwordLocator2 = pageTwo.locator("#input-password");
  const submitbtnLocator2 = pageTwo.locator("[value = 'Login']");

  await userNameLocator2.fill("pwtest@opencartcom");

  await passwordLocator2.fill("playwright@123");
  await submitbtnLocator2.click();

  const homePageTitle2 = await pageTwo.title();
  console.log("the Observed title is : " + homePageTitle2);
  expect(homePageTitle2).toBe("Account Login");

  //   await page.screenshot({ path: "homePage.png" });
  await browserContextOne.close();
  await browserContextTwo.close();
  await browser.close();
});
