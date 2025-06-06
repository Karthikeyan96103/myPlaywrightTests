const elementActions = require("../../actionHelpers/elementActions");
const loginPageObjects = require("./loginPage.Objects");

class loginpageFunctions {
  async performLogin(page, username, password) {
    await elementActions.fillInputs(
      page,
      loginPageObjects.ElementUserName,
      username
    );
    await elementActions.fillInputs(
      page,
      loginPageObjects.ElementPassword,
      password
    );
    await elementActions.clickElement(page, loginPageObjects.ElementSubmitBtn);
  }
}

module.exports = new loginpageFunctions();
