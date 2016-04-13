(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$.domgen = require('./src');

},{"./src":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = domGen;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Returns a generator of the doms of the given tag name.
 * @param {string} tagName The tag name of the dom to create
 * @return {Function}
 */
function domGen(tagName) {

  /**
   * Generates a dom with the given params.
   * @param {object} [opts] The options to pass as the second arg of $('<tag/>', arg)
   * @param {object[]} args The objects to append to the element
   * @return {jQuery}
   */
  return function (opts) {
    var _$, _ref;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!seemLikePlainObject(opts)) {
      args.unshift(opts);
      opts = undefined;
    }

    return (_$ = $('<' + tagName + '/>', opts)).append.apply(_$, _toConsumableArray((_ref = []).concat.apply(_ref, args)));
  };
}

/**
 * Checkes if the object is plain.
 * @param {object} o The object
 * @return {boolean}
 */
function seemLikePlainObject(o) {
  return o instanceof Object && Object.getPrototypeOf(o).hasOwnProperty('isPrototypeOf');
}

var div = exports.div = domGen('div');
var span = exports.span = domGen('span');
var p = exports.p = domGen('p');

var h1 = exports.h1 = domGen('h1');
var h2 = exports.h2 = domGen('h2');
var h3 = exports.h3 = domGen('h3');
var h4 = exports.h4 = domGen('h4');
var h5 = exports.h5 = domGen('h5');
var h6 = exports.h6 = domGen('h6');

var form = exports.form = domGen('form');
var input = exports.input = domGen('input');
var label = exports.label = domGen('label');
var textarea = exports.textarea = domGen('textarea');
var select = exports.select = domGen('select');
var option = exports.option = domGen('option');

var hr = exports.hr = domGen('hr');
var br = exports.br = domGen('br');

var ul = exports.ul = domGen('ul');
var ol = exports.ol = domGen('ol');
var li = exports.li = domGen('li');

var small = exports.small = domGen('small');
var big = exports.big = domGen('big');
var strong = exports.strong = domGen('strong');
var i = exports.i = domGen('i');
var b = exports.b = domGen('b');
var s = exports.s = domGen('s');
var address = exports.address = domGen('address');
var sub = exports.sub = domGen('sub');
var sup = exports.sup = domGen('sup');

var table = exports.table = domGen('table');
var tr = exports.tr = domGen('tr');
var th = exports.th = domGen('th');
var td = exports.td = domGen('td');

var dl = exports.dl = domGen('dl');
var dt = exports.dt = domGen('dt');
var dd = exports.dd = domGen('dd');

var main = exports.main = domGen('main');
var header = exports.header = domGen('header');
var nav = exports.nav = domGen('nav');
var aside = exports.aside = domGen('aside');
var article = exports.article = domGen('article');
var footer = exports.footer = domGen('footer');

},{}]},{},[1]);
