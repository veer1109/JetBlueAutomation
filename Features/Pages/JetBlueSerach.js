/*--------------------------Jet Blue Home page ---------------------------------------
======Author:Veerkumar Patil==============
File contains all the details for all the locators used to select controls on home page
---------------------------------------------------------------------------------------*/

var JetBlueSearch = function()
{
    this.URL= "https://www.jetblue.com";
    this.DepartureAirport=element(by.id('jbBookerDepart'));
    this.from= element(by.css('.DepartBox>img'));
    this.Region=element(by.xpath("//div[@class='region-list-container']/a[1]"));
    //this.Region=element.all(by.css('.region-list-container>a'));
    this.Country=element.all(by.css('.country-list > .city'));
    this.ArrivalAirport=element(by.id('jbBookerArrive'));
    this.DepartureDate=element(by.id('jbBookerCalendarDepart'));
    this.ArrivalDate=element(by.id('jbBookerCalendarReturn'));
    this.AdultDropown=element(by.xpath(".//*[@id='jbBookerGroup-0']/div/div"));
    this.NumAdults=element.all(by.xpath(".//*[@id='jbBookerGroup-0']/div/ol/li"));
    this.FindIt=element(by.xpath("//input[@value='Find it']"));

}
module.exports = new JetBlueSearch();