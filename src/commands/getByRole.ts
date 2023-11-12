import { NightwatchClient, Options } from 'nightwatch';

module.exports = class GetByRole {
  async command(this: NightwatchClient, role = 'heading', options: Options) {
    const browser = this.api;
    const foundElement = await browser.element.findByRole(role as 'heading', options);
    console.info(`✔ GetByRole got element: ${JSON.stringify(foundElement)}`);

    // log classes
    const classes = await browser.element(foundElement).getProperty('classList');
    console.info(`✔ GetByRole got classes: ${JSON.stringify(classes)}`);

    // log element text
    const text = await browser.element(foundElement).getText();
    console.info(`✔ GetByRole got text: ${JSON.stringify(text)}`);

    return foundElement;
  }
};
