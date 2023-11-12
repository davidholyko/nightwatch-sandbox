import 'nightwatch';

// Fixes some TS Error that Chai.Assertion doesnt exist
// in @types/nightwatch
declare global {
  namespace Chai {
    interface Assertion {}
  }
}

declare module 'nightwatch' {
  interface NightwatchCustomCommands {
    /**
     * A small example of a Custom Command that finds an element
     * @param {Definition} selector
     */
    findAndLog(selector: Definition): Promise<void>;

    /**
     * Simulates an error to show that errors report the line failed on
     * in test report
     */
    simulateError(): Promise<void>;
  }
}
