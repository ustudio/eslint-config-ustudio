const test = require('ava');
const {isPlainObject} = require('is-plain-object');
const eslint = require('eslint');

async function runEslint(str, conf) {
  const linter = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: conf
  });

  const results = await linter.lintText(str);

  return results[0].messages;
}

test('main', async(t) => {
  const conf = require('..');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));

  const errors = await runEslint('\'use strict\';\nconsole.log("unicorn")\n', conf);

  t.is(errors.length, 3);
  t.is(errors[0].ruleId, 'no-console');
  t.is(errors[1].ruleId, 'quotes');
  t.is(errors[2].ruleId, 'semi');
});

test('browser', async(t) => {
  const conf = require('../browser');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.env));
  t.true(conf.env.browser);

  const errors = await runEslint('var document = 1;\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-redeclare');
  t.is(errors[1].ruleId, 'no-unused-vars');
});

test('es6', async(t) => {
  const conf = require('../esnext');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));

  const errors = await runEslint('function gen() {};\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-unused-vars');
  t.is(errors[1].ruleId, 'no-extra-semi');
});

test('esnext', async(t) => {
  const conf = require('../esnext');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));

  const errors = await runEslint('var foo = true;\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-var');
  t.is(errors[1].ruleId, 'no-unused-vars');
});

test('esnext es2016', async(t) => {
  const conf = require('../esnext');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));

  const errors = await runEslint('let unused; const x = async() => {\n\tawait Promise.resolve({b: 1, ...x});\n};\nx();\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-unused-vars');
  t.is(errors[1].ruleId, 'indent');
});

test('react', async(t) => {
  const conf = require('../react');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));

  const errors = await runEslint('export default React.createReactClass({' +
    '\n  render() {\n    <div>Hello {this.props.name}</div>;' + '\n  }\n});\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'react/react-in-jsx-scope');
  t.is(errors[1].ruleId, 'react/prop-types');
});
