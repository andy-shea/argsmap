import zipObject from 'lodash.zipobject';

// http://stackoverflow.com/a/31194949
function params(func) {
  return (func + '')
    .replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
    .split(',').filter(Boolean); // split & filter [""]
}

function argsMap(func, args) {
  return zipObject(params(func), args);
}

export default argsMap;
