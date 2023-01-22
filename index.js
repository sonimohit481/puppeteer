const puppeteer = require('puppeteer');
(async ()=>{
    // const browser = await puppeteer.launch({headless:false})
    const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
    const page = await browser.newPage()

    await page.goto('https://app-staging.youshd.com');
    // await page.click('button.btn-login',{delay:100000000000})


})();