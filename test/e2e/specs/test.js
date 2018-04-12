const mountebank = require('mountebank-util')
const stubServer = new mountebank()

module.exports = {
  before: function () {
    stubServer.addResponse('/hello', 'GET', 'Conan')
    stubServer.createImposter()
  },

  after: function () {
    stubServer.deleteImposter()
  },

  'default e2e tests': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
    .url(devServer)
    .end()
  }
}
