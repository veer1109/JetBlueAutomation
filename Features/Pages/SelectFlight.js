/*--------------------------Jet Blue Select flight page --------------------------------------------
======Author:Veerkumar Patil==============
File contains all the details for all the locators used to select controls on filght search displayed
-----------------------------------------------------------------------------------------------------*/

var SelectFlight = function()
{
    this.DepartureRefundable= element(by.id('ffGroupButton_od1_gr2'));
    this.DepartureFlight=element(by.id('flightSelectGr_0_50'));
    this.ArrivalRefundable=element(by.id('ffGroupButton_od2_gr2'));
    this.ArrivalFlight=element(by.id('flightSelectGr_1_391'));
    this.ViewInternary=element(by.id('summaryBlockHeader'));
    this.Continue=element(by.id('pgButtonNext'));
    this.AcceptBaggageTerms=element(by.css('.button1'));

}
module.exports =new SelectFlight();