import { NightwatchClient } from 'nightwatch';

module.exports = class SimulateError {
  async command(this: NightwatchClient) {
    const browser = this.api;

    await browser.perform(function fn(done: Function) {
      const actions = browser.actions({ async: true });

      actions //
        .keyDown(browser.Keys.TAB)
        .keyUp(browser.Keys.TAB)
        .perform();

      done();
    });

    return Promise.resolve();
  }
};
