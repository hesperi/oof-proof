import test from 'ava';

const oof = require('./index.js');

test('Properly detects oofs', t => {
  t.true(oof("oof"), 'detects oof');
  t.true(oof("OOF"), 'detects allcaps OOF');
  t.true(oof("Oof"), 'detects capitalized Oof');
  t.true(oof("0Of"), 'detects oof with 0');
  t.true(oof("lol oof asdf"), 'detects oof when not the first word');
  t.false(oof("proof"), 'doesn\'t detect words containing oof');
});
