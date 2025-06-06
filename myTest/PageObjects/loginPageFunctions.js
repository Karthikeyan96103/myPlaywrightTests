const ElementActions = require("../utils/elementActionHelpers");
const CommonUtilities = require("../utils/commonUtilities");

class LoginPage {
  constructor(page, selectors) {
    this.page = page;
    this.selectors = selectors;
    this.actions = new ElementActions(page);
    this.utils = new CommonUtilities(page);
  }

  async enterusername(username) {
    await this.actions.fill(this.selectors.username, username);
  }
  async enterpassword(password) {
    await this.actions.fill(this.selectors.password, password);
  }
  async gettitle() {
    const title = await this.page.textContent(titleselect);
    return title;
  }
  async login(username, password) {
    await this.enterusername(username);
    await this.enterpassword(password);
    await this.utils.clickAndNavigate(this.selectors.loginBtn);
    const title = await this.utils.getPageTitle();
    console.log("Page title after login:", title);

    // console.log(await this.gettitle());
  }
}
module.exports = { LoginPage };
