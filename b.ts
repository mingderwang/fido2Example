const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to a blank page
  await page.goto('about:blank');

  // Execute your JavaScript code here
  await page.evaluate(() => {
    navigator.credentials.create().then((credentials) => {
      console.log('Credentials created:', credentials);
    }).catch((error) => {
      console.error('Error creating credentials:', error);
    });
  });

  // Close the browser
  await browser.close();
})();
