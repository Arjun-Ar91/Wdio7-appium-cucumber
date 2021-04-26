# Wdio7-appium-cucumber

Boilerplate project to run native and browser for android and ios using cucumber with page object pattern.

## Based on

- WebdriverIO v7
- cucumber v7
- Node version 10.16 or higher
- Appium

## Supports
- Native Android and iOS apps
- Android Chrome browser 
- iOS Safari browser 
- Supports Page Object Model
- Contains sample test scenarios in cucumber
- Supports multiple cucumber html reports

## Source
Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)

## Running sample test
Follow the below commands -
- Clone the project - `https://github.com/Arjun-Ar91/Wdio7-appium-cucumber.git`.

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run ios` to run ios native app

- Execute `npm run iosBrowser` to run ios safari browser

- Execute `npm run android` to run android native app

- Execute `npm run androidBrowser` to run android chrome browser

- Execute `npm run lint` to run eslint
