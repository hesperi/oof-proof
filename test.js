import test from 'ava';

const oof = require('./index.js');

test('CIDR to v4 masks generate properly', t => {
  t.true(oof("oof"), 'detects oof');
  t.true(oof("OOF"), 'detects allcaps OOF');
  t.true(oof("Oof"), 'detects capitalized Oof');
  t.true(oof("lol oof asdf"), 'detects oof when not the first word');
  t.true(oof("o o f"), 'detects oof with spaces');
  t.false(oof("proof"), 'doesn\'t detect words containing oof');
});
