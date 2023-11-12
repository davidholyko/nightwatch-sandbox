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
    findAndLog(selector: Definition): Promise<void>;
  }
}
