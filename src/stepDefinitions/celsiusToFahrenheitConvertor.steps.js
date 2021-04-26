const {Given, When, Then} = require('@cucumber/cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given(/^I launch the app$/, () => {
    celsiusToFahrenheitConvertorPage.launchApp();
});

When(/^I enter celsius of (.*)$/, (celsius) => {
    celsiusToFahrenheitConvertorPage.enterCelsius(celsius);
});

Then(/^I should see fahrenheit of (.*)$/, (fahrenheit) => {
    celsiusToFahrenheitConvertorPage.verifyFahrenheitValue(fahrenheit);
});
