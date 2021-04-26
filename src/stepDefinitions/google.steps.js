const {Given, Then} = require('@cucumber/cucumber');

const GooglePage = require('./../pages/google.page');

const googlePage = new GooglePage();

Given(/^I launch the google$/, () => {
    googlePage.launchGoogle();
});

Then(/^I verify the title to be (.*)$/, (title) => {
    googlePage.verifyTitle(title);
});
