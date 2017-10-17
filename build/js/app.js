(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
  function Animal(name, healthLevel, pauseLevel, healthAlert) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.healthLevel = healthLevel;
    this.pauseLevel = pauseLevel;
    this.healthAlert = healthAlert;
  }

  _createClass(Animal, [{
    key: "setHunger",
    value: function setHunger(healthLevel) {
      var _this = this;

      this.pauseLevel = setInterval(function () {
        _this.healthLevel--;
        if (_this.healthLevel === 10) {
          alert("My energy is running low");
        }
      }, 3000);
    }
  }, {
    key: "feed",
    value: function feed(healthLevel) {
      return this.healthLevel += 10;
    }
  }, {
    key: "sleep",
    value: function sleep(healthLevel) {
      clearInterval(this.pauseLevel);
    }
  }, {
    key: "waken",
    value: function waken(healthLevel) {
      this.setHunger();
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
  var animalName = $('.animal').val();
  var newAnimal = new _animal.Animal(animalName, 30);

  $('.test').html(newAnimal.healthAlert);

  $('.name').on('click', function () {

    $('.animal-name').text(animalName);
    var foodLevelOut = newAnimal.setHunger();
    $('.health-result').html(newAnimal.healthLevel);
  });

  $('.health').click(function () {
    $('.health-result').text(newAnimal.healthLevel);
    console.log(newAnimal.healthLevel);
  });

  $('.feed-btn').click(function () {
    var test1 = newAnimal.feed();
    console.log('health:', newAnimal.healthLevel);
  });

  $('.sleep-btn').click(function () {
    newAnimal.sleep();
    console.log(newAnimal.healthLevel);
  });

  $('.wake-up-btn').click(function () {
    newAnimal.waken();
    console.log(newAnimal.healthLevel);
  });
});

},{"./../js/animal.js":1}]},{},[2]);
