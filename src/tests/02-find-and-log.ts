import 'nightwatch';

describe('Baseline Test', () => {
  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', async function (browser) {
    await browser.waitForElementVisible('body');
    await browser.pause(1000);
    await browser.findAndLog('.hero__title');
  });

  after(browser => {
    browser.end();
  });
});
