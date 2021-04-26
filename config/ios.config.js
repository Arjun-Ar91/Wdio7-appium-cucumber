const {config} = require('./wdio.conf');
const IosInfo = require('./ios.info');

// Appium capabilities
config.capabilities = [
    {
        // 'cjson:metadata': {
        //     device: 'MacBook Pro 15',
        //     platform: {
        //         name: 'OSX',
        //         version: '11.2.3'
        //     },
        //     browser: {
        //         name: 'chrome',
        //         version: '58',
        //     },
        //     // for an app
        //     app: {
        //         name: 'name.of.app.ipa',
        //         version: '1.2.3',
        //     },
        // },
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
