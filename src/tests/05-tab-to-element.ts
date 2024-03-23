import 'nightwatch';
import { DescribeInstance } from 'nightwatch';

describe('Baseline Test', function (this: DescribeInstance) {
  this.disabled = false;
  this.tags = [];

  before(browser => {
    browser.navigateTo('http://localhost:7310/');
  });

  it('Tab once and assert active element', async function (browser) {
    await browser.waitForElementVisible('body');

    await browser.tab();
    browser.expect.element('#btn-1').to.be.active;

    await browser.tab();
    browser.expect.element('#btn-2').to.be.active;

    await browser.tab();
    browser.expect.element('#btn-3').to.be.active;
  });

  after(browser => {
    browser.end();
  });
});
