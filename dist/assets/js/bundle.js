/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("// STEP 2\n// https://jp.vuejs.org/v2/examples/todomvc.html\nvar STORAGE_KEY = 'todos-vuejs-demo';\nvar todoStorage = {\n  fetch: function fetch() {\n    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');\n    todos.forEach(function (todo, index) {\n      todo.id = index;\n    });\n    todoStorage.uid = todos.length;\n    return todos;\n  },\n  save: function save(todos) {\n    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));\n  }\n}; // STEP 1\n\nvar app = new Vue({\n  el: '#app',\n  data: {},\n  methods: {}\n});\n\n//# sourceURL=webpack://new_base_gulpjs_master_slim/./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=maps/bundle.js.map
