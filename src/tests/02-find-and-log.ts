import 'nightwatch';
import { DescribeInstance } from 'nightwatch';

describe('Find and Log Test', function (this: DescribeInstance) {
  this.disabled = false;
  this.tags = [];

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
