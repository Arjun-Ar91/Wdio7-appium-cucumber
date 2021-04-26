const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();

class SettingsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/settings.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(2);
    }

    verifyGeneralLabel() {
        ActionHelper.getText(this.getObjectLocator().general).should.equal('General');
    }
}

module.exports = SettingsPage;
