const pptr = require('puppeteer-core');
(async () => {
  const browser = await pptr.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  const localFilePath = 'file:/Users/admin/src/fido2Example/index.html';
  await page.goto(localFilePath);
})();
