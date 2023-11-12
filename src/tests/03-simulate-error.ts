import 'nightwatch';
import { DescribeInstance } from 'nightwatch';

describe('Simulate Error Test', function (this: DescribeInstance) {
  this.disabled = true;
  this.tags = [];

  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', async function (browser) {
    await browser.waitForElementVisible('body');
    await browser.simulateError();
    await browser.assert.titleContains('Ecosia');
  });

  after(browser => {
    browser.end();
  });
});
