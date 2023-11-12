import { Definition, NightwatchClient } from 'nightwatch';

module.exports = class FindAndLog {
  async command(this: NightwatchClient, selector: Definition) {
    let returnValue;

    try {
      returnValue = await this.api.findElement(selector);
      console.info(`✔ FindAndLog found id: ${returnValue.getId()}`);
    } catch (err) {
      const error = err as Error;
      console.error('An error occurred', error);
      returnValue = {
        status: -1,
        error: error.message,
      };
    }

    return returnValue;
  }
};
