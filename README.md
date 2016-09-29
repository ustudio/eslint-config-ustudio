## Install

```shell
npm install --save-dev git+ssh://git@github.com/ustudio/eslint-config-ustudio.git
```

This will automatically install `eslint` and `eslint-plugin-react`.

## Configuration

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

## Usage

Execute the following command:

```shell
npm run lint
```

### Lint in CI

Add the following to your `circle.yml`:

```yaml
test:
  pre:
    - npm run lint
```
