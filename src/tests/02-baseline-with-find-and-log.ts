import 'nightwatch';

describe('Baseline Test', () => {
  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', function (browser) {
    browser.waitForElementVisible('body');
    browser.assert.titleContains('Ecosia');
    browser.findAndLog('.hero__title.heading.heading--h1');
  });

  after(browser => {
    browser.end();
  });
});
