const { test: base } = require("@playwright/test");
const commonUtilities = require("../utils/commonUtilities");
// const Assertions = requires('../');
const PageObjectManager = require("./pageObjectManager");

exports.test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({});
    await use(context);
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },
  //   assertions: async ({ page }, use) => {
  //     const assertions = new Assertions(page);
  //     await use(assertions);
  //   },
  utils: async ({ page }, use) => {
    const utils = new commonUtilities(page);
    await use(utils);
  },
  urlLaunch: async ({ page, utils }, use) => {
    await use((environment, appURLKey) =>
      utils.urlLaunch(environment, appURLKey)
    );
  },
  pom: async ({ page }, use) => {
    const pom = new PageObjectManager(page);
    await use(pom);
  },
});
exports.expect = base.expect;
