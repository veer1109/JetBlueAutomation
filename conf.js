
exports.config = {

    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Test.js'],

    multiCapabilities: [{

        browserName: 'firefox',
        //  browserName: 'chrome' ,
        // chromeOptions:{
        //   args: ['--start-maximized','--disable-extensions']
        // }

    },],
    allScriptsTimeout: 100000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 250000,
        isVerbose: true
    }
}
