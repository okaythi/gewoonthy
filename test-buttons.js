import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log('Launching Chrome...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Enable console logging
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
    
    // Go to login page
    console.log('Navigating to http://127.0.0.1:8788/ ...');
    await page.goto('http://127.0.0.1:8788/', { waitUntil: 'networkidle2' });
    
    console.log('Attempting login...');
    const emailInput = await page.$('input[type="email"]');
    if (emailInput) {
      await page.type('input[type="email"]', 'thy@gewoonthy.com');
      await page.type('input[type="password"]', 'thleaC2024@2');
      await Promise.all([
        page.click('button[type="submit"]'),
        page.waitForNavigation({ waitUntil: 'networkidle2' })
      ]);
      console.log('Logged in successfully!');
    } else {
      console.log('No login fields found on homepage, might already be logged in.');
    }
    
    console.log('Navigating to /profile...');
    await page.goto('http://127.0.0.1:8788/profile', { waitUntil: 'networkidle2' });
    
    console.log('Testing buttons on /profile...');
    
    const clickAndLog = async (selector, name) => {
      console.log(`\n--- Testing ${name} ---`);
      const btn = await page.$(selector);
      if (btn) {
        console.log(`Found ${name}, clicking...`);
        await btn.click();
        await new Promise(r => setTimeout(r, 1000));
      } else {
        console.log(`Error: ${name} not found!`);
      }
    };

    await clickAndLog('#btn-update-username', 'Edit Username');
    await clickAndLog('#btn-update-email', 'Edit Email');
    await clickAndLog('#btn-update-password', 'Change Password');
    await clickAndLog('#btn-edit-avatar', 'Edit Avatar');
    
    // Test clicking a dynamically generated Request Access button
    await clickAndLog('[data-action="request-access"]', 'Request Access');

    await clickAndLog('#btn-manage-discord-import', 'Manage Data Import');
    await clickAndLog('#btn-request-data', 'Request Data Export');

    console.log('\nClosing browser...');
    await browser.close();
    process.exit(0);
  } catch (e) {
    console.error('Test failed:', e);
    process.exit(1);
  }
})();
