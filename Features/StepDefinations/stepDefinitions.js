/*--------------------------Jet Blue Select flight page --------------------------
======Author:Veerkumar Patil==============
File contains all steps matching to the feature file 
----------------------------------------------------------------------------------*/

var { defineSupportCode } = require('cucumber');
var seach = require('../Pages/JetBlueSerach');
var flightSearch = require('../Pages/SelectFlight');
var TDetails = require('../Pages/TravellerDetails');
defineSupportCode(({ Given, When, Then }) => {

    Given(/^I go to "([^"]*)"$/, function (web) {
        browser.get(web);
        browser.sleep(30000);

    });
    When(/^I enter"([^"]*)"in Departure Airport$/, function (_depAirport) {

        // seach.DepartureAirport.sendKeys().clear();
        //seach.DepartureAirport.sendKeys("New York");
        browser.executeScript('arguments[0].scrollIntoView()', seach.from);
        browser.executeScript("arguments[0].click()", seach.from);
        browser.driver.switchTo().activeElement();
        browser.sleep(10000);
        seach.Region.click();
        seach.Country.get(12).click();
        browser.sleep(10000);
        //  seach.DepartureAirport.sendKeys(_depAirport);
    });
    When(/^I enter"([^"]*)"in Arrival Airport$/, function (_arrAirport) {

        seach.ArrivalAirport.sendKeys(_arrAirport);
    });
    When(/^I enter"([^"]*)"in Departure Date$/, function (_departureDate) {

        seach.DepartureDate.sendKeys(_departureDate);
    });
    When(/^I enter"([^"]*)"in Arrival Date$/, function (_arrivalDate) {
        // Write code here that turns the phrase above into concrete actions
        seach.ArrivalDate.sendKeys(_arrivalDate);
    });

    When(/^I select"([^"]*)"from Adult Passengers$/, function (_numAdults) {

        seach.AdultDropown.click();
        seach.NumAdults.get(_numAdults).click();
        browser.sleep(30000);
    });
    When('I click Find It Button to go Flight search', function () {
        seach.FindIt.click();
        browser.sleep(30000);
        browser.waitForAngularEnabled(false);

    });
    When('I click Refundable button for Departure Flight', function () {

        browser.sleep(10000);
        flightSearch.DepartureRefundable.click();
        browser.sleep(10000);
    });
    When('I select Departure flight', function () {

        flightSearch.DepartureFlight.click();
        browser.sleep(10000);
    });
    When('I click Refundable button for Arrival Flight', function () {

        flightSearch.ArrivalRefundable.click();
        browser.sleep(10000);
    });
    When('I select Arrival flight', function () {

        browser.executeScript('arguments[0].scrollIntoView()', flightSearch.ArrivalFlight);
        browser.executeScript("arguments[0].click()", flightSearch.ArrivalFlight);
        // flightSearch.ArrivalFlight.click();
        browser.sleep(10000);
    });
    When('I view Iternary Summary', function () {

        flightSearch.ViewInternary.click();
    });
    When('I click Continue Button', function () {

        flightSearch.Continue.click();

    });
    When('I accept Baggage Terms to go to Passengers details page', function () {
        flightSearch.AcceptBaggageTerms.click();
        browser.sleep(30000);


    });

    When('I enter Passengers Details', function () {
        TDetails._SelectTitle();
        TDetails._EnterFirstName();
        TDetails._EnterLastName();
        TDetails._SelectGender();
        TDetails._SelectMonth();
        TDetails._SelectDate();
        TDetails._SelectYear();
        TDetails._EnterAddressContactDetails();


    });
    When('I click on Home link to go to JetBlue website home page', function () {
        TDetails._GoToHome();
        browser.sleep(20000);
    });





});