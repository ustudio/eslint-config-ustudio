## Install

```shell
npm install --save-dev eslint eslint-config-ustudio
```

## Usage

Add the following to your `package.json`:

```js
{
  "devDependencies": {
    "eslint": "^2.4.0",
    "eslint-config-ustudio": "^0.1.0"
  },
  eslintConfig: {
    "extends": "ustudio"
  },
  "scripts": {
    "lint": "eslint ."
  }
```

Execute the following command:

```shell
npm run lint
```
