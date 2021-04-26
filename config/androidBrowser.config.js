const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        automationName: 'uiautomator2',
        deviceName: AndroidInfo.deviceName(),
        platformVersion: AndroidInfo.platFormVersion()
    }
];

config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;
