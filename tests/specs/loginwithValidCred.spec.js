import { test, expect } from "@playwright/test";
const credentials = require("../testData/userCredentials.json");
const login = require("../pageObjects.js/loginPage/loginPage.Function");
const environmentUrls = require("../envUrls.json");
const baseUrl =
  environmentUrls[environmentUrls.ENV]?.baseUrl || environmentUrls.QA.baseUrl;
console.log("ponting to : " + baseUrl);

test.describe("verify login scenarios", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await login.performLogin(
      credentials.QAtestUsers.standarduser.userName,
      credentials.QAtestUsers.standarduser.password
    );
    console.log("login successfull");
  });
  test("check page title after login", async ({ page }) => {
    try {
      const title = await page.title();
      console.log("currentPageTitle : ", title);
      expect(title).not.toBeNull();
    } catch (error) {
      console.error("Test Failed : ", error);
    }
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
