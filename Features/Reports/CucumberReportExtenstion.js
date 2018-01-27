/*--------------------------CucumberReportExtenstion.js--------------------------
======Author:Veerkumar Patil==============
File contains all code required to JSON and HTML report
----------------------------------------------------------------------------------*/

var outputDir = './htmlReport/';
var screenshotDir = './reports/screenshots/';
var targetJson = outputDir + 'cucumber_report.json';

var JsonFormatter = require('cucumber').JsonFormatter;
var fse = require('fs-extra');
var reporter = require('cucumber-html-reporter');

var {defineSupportCode} = require('cucumber');
defineSupportCode(function({After, registerListener}) {
	var createHtmlReport = function (sourceJson) {

	    var options = {
           theme: 'bootstrap',
          //theme:'foundation',
            jsonFile: sourceJson,
            reportTitle: 'Test Execution Report',
            output: outputDir+'cucumber_report.html',
	       // reportSuiteAsScenarios: true,
           // launchReport: true,
            metadata: {
                "App Version":"0.0.1",
                "Test Environment": "Testing",
                "Browser": "Firefox",
                "Platform": "Windows 10",
                "Smoke Test": "Scenarios",
                "Executed": "Local",
                "Author": "Veerkumar Patil "
            }
        };
        

	   reporter.generate(options);
	};

	jsonFormatter = new JsonFormatter;
	jsonFormatter.log = function(string) {
		if (!fse.existsSync(outputDir)) {
			fse.mkdirSync(outputDir);
		}
		
		fse.writeFile(targetJson, string, function(err) {
			if (err) {
				console.log('Failed to save cucumber test results to json file.');
				console.log(err);
			} else {
				createHtmlReport(targetJson);
			}
		});
	};

		registerListener(jsonFormatter);
});

