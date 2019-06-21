import test from 'ava';
import isPlainObj from 'is-plain-object';
import eslint from 'eslint';

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    baseConfig: conf
  });

  return linter.executeOnText(str).results[0].messages;
}

test('main', t => {
  const conf = require('..');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('\'use strict\';\nconsole.log("unicorn")\n', conf);

  t.is(errors.length, 3);
  t.is(errors[0].ruleId, 'no-console');
  t.is(errors[1].ruleId, 'quotes');
  t.is(errors[2].ruleId, 'semi');
});

test('browser', t => {
  const conf = require('../browser');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(conf.env.browser);

  const errors = runEslint('var document = 1;\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-redeclare');
  t.is(errors[1].ruleId, 'no-unused-vars');
});

test('es6', t => {
  const conf = require('../esnext');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('function gen() {};\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-unused-vars');
  t.is(errors[1].ruleId, 'no-extra-semi');
});

test('esnext', t => {
  const conf = require('../esnext');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('var foo = true;\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-var');
  t.is(errors[1].ruleId, 'no-unused-vars');
});

test('esnext es2016', t => {
  const conf = require('../esnext');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('let unused; const x = async() => {\n\tawait Promise.resolve({b: 1, ...x});\n};\nx();\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'no-unused-vars');
  t.is(errors[1].ruleId, 'indent');
});

test('react', t => {
  const conf = require('../react');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('export default React.createReactClass({' +
    '\n  render() {\n    <div>Hello {this.props.name}</div>;' + '\n  }\n});\n', conf);

  t.is(errors.length, 2);
  t.is(errors[0].ruleId, 'react/react-in-jsx-scope');
  t.is(errors[1].ruleId, 'react/prop-types');
});
