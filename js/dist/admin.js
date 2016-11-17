require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _foo = require('./foo');

var _bizz = require('./bizz');

var _Observable = require('rxjs/Observable');

require('rxjs/add/observable/of');

var _window = window,
    console = _window.console;


console.log((0, _foo.foo)('admin this'));
console.log((0, _bizz.bizz)('admin bar'));
// patch Observable with appropriate methods


_Observable.Observable.of(1, 2, 3).subscribe(function (a) {
  return console.log(a);
});

},{"./bizz":2,"./foo":3,"rxjs/Observable":5,"rxjs/add/observable/of":9}]},{},[1]);
