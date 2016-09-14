## Install

```shell
npm install --save-dev eslint git+ssh://git@github.com/ustudio/eslint-config-ustudio.git
```

One day after we publish to NPM, it will become:

```shell
npm install --save-dev eslint eslint-config-ustudio
```

## Usage

Add the following to your `package.json`:

```js
{
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
