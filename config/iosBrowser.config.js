const {config} = require('./wdio.conf');
const IosInfo = require('./ios.info');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        browserName: 'safari',
        maxInstances: 1,
        automationName: 'XCUITest',
        deviceName: IosInfo.deviceName(),
        platformVersion: IosInfo.platFormVersion()
    }
];

config.cucumberOpts.tagExpression = '@iosBrowser';// pass tag to run tests specific to ios

exports.config = config;
