import { NightwatchClient } from 'nightwatch';

module.exports = class SimulateError {
  async command(this: NightwatchClient) {
    const error = new Error('An error really occurred') as Error;
    console.error('An error occurred', error);

    return Promise.reject(error);
  }
};
