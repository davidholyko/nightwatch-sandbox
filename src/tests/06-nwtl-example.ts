import 'nightwatch';
import { DescribeInstance } from 'nightwatch';
// @ts-expect-error 'no ts support from @testing-library/nightwatch currently'
import { getQueriesFrom } from '@testing-library/nightwatch';

let getByRole: Function;

describe('Nightwatch Testing Library Test', function (this: DescribeInstance) {
  this.disabled = false;
  this.tags = ['dev'];

  before(browser => {
    browser.navigateTo('http://localhost:7310/');

    const { getByRole: getByRoleFn } = getQueriesFrom(browser);
    getByRole = getByRoleFn;
  });

  it('Tab once and assert active element', async function (browser) {
    await browser.waitForElementVisible('body');

    const btn1 = await getByRole('button', { name: 'Button 1' });
    browser.element(btn1).click();
    await browser.pause(5000);

    const btn2 = await getByRole('button', { name: 'Button 2' });
    browser.element(btn2).click();
    await browser.pause(5000);
  });

  after(browser => {
    browser.end();
  });
});
