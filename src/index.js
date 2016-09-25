// http://stackoverflow.com/a/31194949
function params(func) {
  return (func + '')
    .replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
    .replace(/=[^,]+/g, '') // strip any ES6 defaults
    .split(',').filter(Boolean); // split & filter [""]
}

function combineArrays(keys, values) {
  return keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
  }, {});
}

function argsMap(func, args) {
  return combineArrays(params(func), args);
}

export default argsMap;
