const {config} = require('./wdio.conf');
const IosInfo = require('./ios.info');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: 'XCUITest',
        deviceName: IosInfo.deviceName(),
        platformVersion: IosInfo.platFormVersion(),
        app: IosInfo.appName() //use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
    }
];

config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;
