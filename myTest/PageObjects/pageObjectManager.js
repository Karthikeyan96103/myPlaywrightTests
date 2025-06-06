const { LoginPage } = require("../PageObjects/loginPageFunctions");
const loginPageObjects = require("../PageObjects/loginPageObjects");

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this._loginPage = null;
  }

  getLoginPage() {
    if (!this._loginPage) {
      this._loginPage = new LoginPage(this.page, loginPageObjects);
    }
    return this._loginPage;
  }
}
module.exports = PageObjectManager;
