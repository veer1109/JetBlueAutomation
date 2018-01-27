/*--------------------------Config file-------------------------------------------------
======Author:Veerkumar Patil==============
File contains configuration details for protractor,selenium,cucumber reports and browser
-----------------------------------------------------------------------------------------*/
exports.config = {
    directConnect: true,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'firefox',
        //'browserName': 'chrome'
    },

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.feature'
    ],

    baseURL: 'http://localhost:8080/',

   
    cucumberOpts: {
        require: [
            'features/Reports/CucumberReportExtenstion.js'
            , 'features/StepDefinations/stepDefinitions.js',
        ],
        tags: '@smoke or @regression',
        format: 'pretty',
        profile: false,
        'no-source': true
    }
};