const { test, expect } = require("../PageObjects/fixtures");
const user = require("../testData/userLoginCredentials.json");

test.describe("Login with Different users", () => {
  test("standard userlogin", async ({ page, utils, pom, urlLaunch }) => {
    console.log(__dirname);
    await urlLaunch("QA", "baseUrl1");
    await pom
      .getLoginPage()
      .login(user.QA.standardUser.username, user.QA.problem_user.password);
  });
});
