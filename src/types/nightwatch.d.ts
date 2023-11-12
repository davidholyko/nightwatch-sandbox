import 'nightwatch';

declare module 'nightwatch' {
  interface NightwatchCustomCommands {
    findAndLog(selector: Definition): Promise<void>;
  }
}
