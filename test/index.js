import test from 'tape';
import argsMap from '../src';

test('maps function with no parameters', t => {
  function noParams() {
    const map = argsMap(noParams, arguments);
    t.equal(map.constructor, Object, 'Map is an object');
    t.equal(Object.keys(map).length, 0, 'Map contains no keys');
    t.end();
  }
  noParams();
});

test('maps basic function definition', t => {
  function basic(foo, bar) {
    const map = argsMap(basic, arguments);
    console.log(map);
    t.equal(Object.keys(map).length, 2, 'Map contains two keys');
    t.equal(map.foo, 'hello', 'foo equals "hello"');
    t.equal(map.bar, 'world', 'bar equals "world"');
    t.end();
  }
  basic('hello', 'world');
});

test('maps parameter list containing arbitrary spaces', t => {
  function spaces( foo  , bar,

      baz   ) {
    const map = argsMap(spaces, arguments);
    t.equal(Object.keys(map).length, 3, 'Map contains three keys');
    t.equal(map.foo, 'hello', 'foo equals "hello"');
    t.equal(map.bar, 'world', 'bar equals "world"');
    t.equal(map.baz, 'test', 'baz equals "test"');
    t.end();
  }
  spaces('hello', 'world', 'test');
});

test('maps parameter list containing single-line comment', t => {
  function singleLineComment(/* comment */foo) {
    const map = argsMap(singleLineComment, arguments);
    t.equal(Object.keys(map).length, 1, 'Map contains a single key');
    t.equal(map.foo, 'hello', 'foo equals "hello"');
    t.end();
  }
  singleLineComment('hello');
});

test('maps parameter list containing multi-line comment', t => {
  function multiLineComment(/* multi
    line
    comment
     */ foo) {
    const map = argsMap(multiLineComment, arguments);
    t.equal(Object.keys(map).length, 1, 'Map contains a single key');
    t.equal(map.foo, 'hello', 'foo equals "hello"');
    t.end();
  }
  multiLineComment('hello');
});
