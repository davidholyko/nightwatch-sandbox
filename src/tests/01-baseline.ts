import 'nightwatch';

describe('Baseline Test', () => {
  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', function (browser) {
    browser.waitForElementVisible('body');
    browser.assert.titleContains('Ecosia');
    browser.assert.visible('input[type=search]');
    browser.setValue('input[type=search]', 'nightwatch');
    browser.assert.visible('button[type=submit]');
    browser.click('button[type=submit]');
    browser.assert.textContains('.layout__content', 'Nightwatch.js');
  });

  after(browser => {
    browser.end();
  });
});
