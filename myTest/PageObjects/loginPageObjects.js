class loginPageSelectors {
  get username() {
    return "//input[@id='user-name']";
  }
  get password() {
    return "//input[@id='password']";
  }
  get loginBtn() {
    return "//input[@id='login-button']";
  }
  get titleselect() {
    return "//span[@class='title']";
  }
}
module.exports = new loginPageSelectors();
