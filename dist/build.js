/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* 
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var btn = document.querySelector("btn");
var res = document.querySelector("#res"); */

var btn =  document.getElementById("btn");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var res =  document.getElementById("res");

var btn2 =  document.getElementById("btn2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var res2 =  document.getElementById("res2");

console.log(btn);


var calc = __webpack_require__(1);
var add = calc.add;
var sub = calc.sub;

btn.onclick = function(){
    console.log('123');
    console.log(num1);
    console.log(num1.value);
    res.value = add(num1.value-0,num2.value-0);
}

btn2.onclick = function(){
    console.log('123');
    console.log(num3);
    console.log(num3.value);
    res2.value = sub(num3.value-0,num4.value-0);
}
// btn.onclick = function () {
    

//     console.log(num1.value)
//     console.log(num2.value)
//     // console.log(num)
//     res.value = add(num1, num2);
// }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function add(x, y) {
    return x + y;
}

function sub(x,y){
    return x-y;
}

module.exports = {
    add:add,
    sub:sub
};
// module.exports = sub;

/***/ })
/******/ ]);