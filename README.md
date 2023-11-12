# Nightwatch Sandbox

![npm-run-start](./docs/images/npm-run-start.png)

## Prerequisites

1. [Node](https://nodejs.org/en/)
2. [Selenium Server](https://www.selenium.dev/downloads/)

## Setup

```shell
nvm use
npm i
```

## Run Tests

```
npm run start
```

## Debugging

```
npm run prestart
npx nightwatch dist/tests --config dist/nightwatch.conf.js
```

### Resources

1. https://github.com/kallaspriit/typescript-nightwatch-example
