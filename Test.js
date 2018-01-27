
describe('Demo Home Page open', function () {
    it('Home page should be opened', async function () {
        browser.get("https://www.jetblue.com");
        browser.waitForAngularEnabled(true);
        browser
          .manage()
          .timeouts()
          .implicitlyWait(25000);
          browser.sleep(10000);
        var frm=   element(by.css('.DepartBox>img'));
        browser.executeScript('arguments[0].scrollIntoView()',frm);
       browser.executeScript("arguments[0].click()",frm);

    element(by.id("jbBookerDepart")).sendKeys().clear();
    element(by.id('jbBookerDepart')).sendKeys("a");
browser.sleep(10000);
    element(by.xpath('//cityselector/div[1]/div[2]/ul[1]/li[1]/div/a')).click();
    //  element(by.id("jbBookerArrive")).sendKeys("South");
    });
});