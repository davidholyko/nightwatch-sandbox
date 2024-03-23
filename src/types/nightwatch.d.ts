import 'nightwatch';
import { ScopedSelectorObject, NightwatchElement } from 'nightwatch';

// Fixes some TS Error that Chai.Assertion doesnt exist
// in @types/nightwatch
declare global {
  namespace Chai {
    interface Assertion {}
  }
}

declare module 'nightwatch' {
  type Options = Omit<ScopedSelectorObject, 'selector'> & {
    readonly level?: number | undefined;
    readonly checked?: boolean | undefined;
    readonly current?: string | undefined;
    readonly pressed?: boolean | undefined;
    readonly expanded?: boolean | undefined;
    readonly selected?: boolean | undefined;
  };

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

    /**
     * Small wrapper for findByRole to test scoped element selectors
     *
     * @param {string} role
     * @param {Options} options
     */
    getByRole(role: 'heading', options: Options): Promise<NightwatchElement>;

    /**
     * Tabs once
     *
     */
    tab(): Promise<void>;
  }
}
