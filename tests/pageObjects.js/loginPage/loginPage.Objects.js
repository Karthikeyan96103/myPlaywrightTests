class loginPageObjects {
  get ElementUserName() {
    return "//input[@name = 'user-name' ]";
  }
  get ElementPassword() {
    return "//input[@name = 'password' ]";
  }
  get ElementSubmitBtn() {
    return "//input[@name = 'login-button' ]";
  }
}
module.exports = new loginPageObjects();
