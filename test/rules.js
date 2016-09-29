import fs from 'fs';
import path from 'path';

import test from 'ava';

fs.readdirSync(path.join(__dirname, '../rules'))
  .forEach(name => {
    test(`${name} should be well-formed`, t => {
      const config = require(`../rules/${name}`);

      t.is(typeof config.rules, 'object');
      t.not(Object.keys(config.rules).length, 0, 'there should be at least one rule defined');
    });
  })
;
