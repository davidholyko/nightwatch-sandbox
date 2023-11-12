import 'nightwatch';
import { DescribeInstance } from 'nightwatch';

describe('GetByRole Test', function (this: DescribeInstance) {
  this.disabled = false;
  this.tags = [];

  before(browser => {
    browser.navigateTo('https://www.ecosia.org/');
  });

  it('Demo test ecosia.org', async function (browser) {
    await browser.waitForElementVisible('body');
    await browser.getByRole('heading', { level: 1 });
  });

  after(browser => {
    browser.end();
  });
});
