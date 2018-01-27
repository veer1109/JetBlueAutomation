/*--------------------------Jet Blue Traveller Details page --------------------------
======Author:Veerkumar Patil==============
File contains all the details for all the locators and functions used 
to select controls on traveller page 
and go back to home page 
--------------------------------------------------------------------------------------*/

var TravellerDetails = function () {

    this._SelectTitle = function Selecttitle() {
        var titles = "//select[contains(@id,'.title')]";
        element.all(by.xpath(titles)).then(function (alltitles) {
            for (t = 0; t < alltitles.length; t++) {
                alltitles[t].$('[value="MR"]').click();
            }
        });
    }
    this._EnterFirstName = function EnterFirstName() {
        element.all(by.xpath("//input[contains(@id,'.firstName')]")).then(function (allvalues) {
            for (var i = 0; i < allvalues.length; i++) {
                allvalues[i].sendKeys("Veer");
            }
        });
    }
    this._EnterLastName = function EnterLastName() {
        element.all(by.xpath("//input[contains(@id,'.lastName')]")).then(function (alllastname) {
            for (var i = 0; i < alllastname.length; i++) {
                alllastname[i].sendKeys("VeerPatil");
            }
        });
    }
    this._SelectGender = function SelectGender() {
        element.all(by.xpath("//input[contains(@id,'.gender')]")).then(function (genderlist) {
            for (var i = 0; i < genderlist.length; i++) {
                genderlist[i].click();
            }
        });
    }

    this._SelectDate = function SelectDate() {
        var dobMonth = "//select[contains(@id,'(dobMonth)')]";


        element.all(by.xpath(dobMonth)).then(function (allMonth) {
            for (t = 0; t < allMonth.length; t++) {
                allMonth[t].$('[value="11"]').click();
            }
        });
    }
    this._SelectMonth = function SelectMonth() {
        var dobDate = "//select[contains(@id,'(dobDay)')]";
        element.all(by.xpath(dobDate)).then(function (allDay) {
            for (t = 0; t < allDay.length; t++) {
                allDay[t].$('[value="3"]').click();
            }
        });
    }
    this._SelectYear = function SelectYear() {
        var dobYear = "//select[contains(@id,'(dobYear)')]";
        element.all(by.xpath(dobYear)).then(function (allYear) {
            for (t = 0; t < allYear.length; t++) {
                allYear[t].$('[value="1986"]').click();
            }
        });

    }
    this._EnterAddressContactDetails = function EnterAddressContacts() {
        var addressLine1 = element(by.id('travellersInfo[0].advancedPassengerDetails(addressLine1)'));
        addressLine1.sendKeys("Happy Street");
        var cityName = element(by.id('travellersInfo[0].advancedPassengerDetails(cityName)'));
        cityName.sendKeys("Home Alone");
        element(by.id('travellersInfo[0].advancedPassengerDetails(stateCode)Display')).$('[value="AK"]').click();
        var postalCode = element(by.id('travellersInfo[0].advancedPassengerDetails(postalCode)'));
        postalCode.sendKeys("41601")
        var personalEmail = element(by.id('travellersInfo[0].advancedPassengerDetails(personalEmail)'));
        personalEmail.sendKeys("veer.patil@ash-software.com");
        var confirmPersonalEmail = element(by.id('travellersInfo[0].advancedPassengerDetails(confirmPersonalEmail)'));
        confirmPersonalEmail.sendKeys("veer.patil@ash-software.com");
        var personalEmail1 = element(by.id('travellersInfo[1].advancedPassengerDetails(personalEmail)'));
        personalEmail1.sendKeys("veer1.patil@ash-software.com");
        var phoneNumber = element(by.id('travellersInfo[0].homePhone.phoneNumber'));
        phoneNumber.sendKeys("88898989899");


    }
    this._GoToHome = function GoToHome() {
        element(by.id('returnToJB')).click();
    }

}

module.exports = new TravellerDetails();
