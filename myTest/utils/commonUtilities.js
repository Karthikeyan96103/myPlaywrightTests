const envConfig = require("../envconfig.json");
class CommonUtilities {
  constructor(page) {
    this.page = page;
  }
  async waitForDisplayed(selector) {
    try {
      await this.page
        .locator(selector)
        .waitFor({ state: "visible", timeout: 5000 });
    } catch (error) {
      console.log(
        `Element with selector "${selector}" not displayed within the  timeout`
      );
      throw error;
    }
  }
  async urlLaunch(environment, appURLKey) {
    const targetEnv = process.env.TEST_ENV || environment;
    if (!envConfig[targetEnv]) {
      throw new Error(`Environment "${targetEnv} not found in envConfig.json"`);
    }
    const targetURL = envConfig[targetEnv][appURLKey];
    if (!targetURL) {
      throw new ERROR(
        `URL Key "${appURLKey} not found for environment "${targetEnv} in envConfig.json"`
      );
    }
    console.log(`Launching URL : ${targetURL} for Environment : ${targetEnv}`);
    await this.page.goto(targetURL, { waitUntil: "networkidle" });
    return targetURL;
  }
  async clickAndNavigate(selector, timeout = 3000, waitUntil = "networkidle") {
    await this.waitForDisplayed(selector);
    const navigationPromise = this.page.waitForNavigation({
      timeout,
      waitUntil,
    });
    await this.page.locator(selector).click();
    await navigationPromise;
    await this.page.waitForLoadState("networkidle");
    console.log("Navigation completed and page reached 'networkidle' state.");
  }
  async getPageTitle() {
    return await this.page.title();
  }
}
module.exports = CommonUtilities;
