import 'nightwatch';
import { DescribeInstance } from 'nightwatch';

describe('Baseline Test', function (this: DescribeInstance) {
  this.disabled = false;
  this.tags = [];

  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', async function (browser) {
    await browser.waitForElementVisible('body');
    await browser.assert.titleContains('Ecosia');
    await browser.assert.visible('input[type=search]');
    await browser.setValue('input[type=search]', 'nightwatch');
    await browser.assert.visible('button[type=submit]');
    await browser.click('button[type=submit]');
  });

  after(browser => {
    browser.end();
  });
});
