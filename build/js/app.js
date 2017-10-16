(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
  function Animal(name, foodLevel) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.foodLevel = 10;
  }

  _createClass(Animal, [{
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      setInterval(function () {
        _this.foodLevel--;
      }, 1000);
    }
  }]);

  return Animal;
}();

;

//exports.animalModule = Animal;

},{}],2:[function(require,module,exports){
'use strict';

var _animal = require('./../js/animal.js');

$(document).ready(function () {
  var animalName = void 0,
      newAnimal = void 0,
      foodLevel = void 0;

  $('.name').on('click', function () {
    animalName = $('.animal').val();
    newAnimal = new _animal.Animal(animalName, 10);
    foodLevel = newAnimal.setHunger();
    console.log('foodLevel:', foodLevel);
    console.log(newAnimal);
    $('.animal-name').text(animalName);
  });

  $('.health').click(function () {
    console.log('foodLevel:', foodLevel);
    $('.health-result').text(foodLevel);
  });
});

},{"./../js/animal.js":1}]},{},[2]);
