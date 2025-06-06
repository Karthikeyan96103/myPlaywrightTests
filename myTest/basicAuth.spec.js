import { test, Browser, Page, Expect } from "@playwright/test";
import { chromium, firefox, webkit } from "playwright/test";

test("check for addBaseAuth to URL", async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();

  const userName = "admin";
  const password = "admin";
  // const AuthHeader = "Basic" + btoa(userName + ":" + password);
  page.setExtraHTTPHeaders({ Autherization: createAuth(userName, password) });
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
});

const createAuth = function (username, password) {
  const AuthHeader = "Basic" + btoa(username + ":" + password);
  return AuthHeader;
};
