Feature: JetBlue Flight Search
As a user I want to perform search for flight 
so that i can see diffrent flight options available
and perform steps 
Form : Boston Area (By Clicking on From button and then selecting the option)
To : South Florida Area (By using autocomplete option)
Date : 15 March 2018
Return : 20 March 2018
2 Adults
Go To Refundable on Fligh Search Results
Select Departing Flight (2:29 PM BOS -> 5:56 PM FLL)
Select Returning Flight (1:25 PM FLL -> 4:36 PM BOS)
Expand Iternary from right hand panel
Click Continue
Enter Traveller Details (Only Mandatory Fields)
Again go to home page
@smoke
Scenario: Enter Search Details
Given I go to "https://www.jetblue.com/"
When I enter"Boston Area"in Departure Airport
When I enter"South"in Arrival Airport
When I enter"03-15-2018"in Departure Date
When I enter"03-20-2018"in Arrival Date
When I select"2"from Adult Passengers
And I click Find It Button to go Flight search
@smoke
Scenario: Select Flight from Search Result
When I click Refundable button for Departure Flight
When I select Departure flight 
When I click Refundable button for Arrival Flight
When I select Arrival flight
When I view Iternary Summary
And I click Continue Button 
And I accept Baggage Terms to go to Passengers details page 
@smoke
Scenario: Enter Traveller Details
When I enter Passengers Details
And I click on Home link to go to JetBlue website home page
