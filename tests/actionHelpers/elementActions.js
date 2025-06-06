class elementActions {
  async fillInputs(page, elementID, input) {
    const element = page.locator(`xpath= ${elementID}`);
    await element.waitForSelector(elementID);
    await element.fill(elementID, input);
  }
  async clickElement(page, elementID) {
    const element = page.locator(`xpath= ${elementID}`);
    await element.waitForSelector(elementID);
    await element.click(elementID);
  }
}
module.exports = new elementActions();
