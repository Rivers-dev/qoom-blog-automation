const puppeteer = require('puppeteer');
const url = "https://qoom.io";
var password, email;

(async() =>
{
    try
    {
        const browser = await puppeteer.launch(
            {
                headless: false
            });
        page = await browser.newPage();
        await page.goto(url);
        await page.evaluate(() => 
        {
            let getstarted = document.getElementById('startFree');
            getstarted.click();
            let login = document.getElementById('loginBtnInSignup');
            login.click();
        });
        await page.type('#email', email);
        await page.type('#pwd', password);
        await page.evaluate(() =>
        {
            let submit = document.getElementById('submitBtn');
            submit.click();
        });
        await page.waitForNavigation();
        await page.goto("https://connort.qoom.space/edit/blog.html");
    } catch(error) {
        console.log(error);
    }
})();