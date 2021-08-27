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

eval("// developer mode\nVue.config.devtools = true; // STEP 2\n// https://jp.vuejs.org/v2/examples/todomvc.html\n\nvar STORAGE_KEY = 'todos-vuejs-demo';\nvar todoStorage = {\n  fetch: function fetch() {\n    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');\n    todos.forEach(function (todo, index) {\n      todo.id = index;\n    });\n    todoStorage.uid = todos.length;\n    return todos;\n  },\n  save: function save(todos) {\n    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));\n  }\n}; // STEP 1\n\nvar app = new Vue({\n  el: '#app',\n  data: {\n    todos: []\n  },\n  methods: {\n    // アロー関数を使うとthisの値を参照できない\n    doAdd: function doAdd(event, value) {\n      // $refs.comment で値を取得する\n      var comment = this.$refs.comment;\n\n      if (!comment.value.length) {\n        return;\n      }\n\n      this.todos.push({\n        id: todoStorage.uid++,\n        comment: comment.value,\n        state: 0\n      });\n      comment.value = '';\n    }\n  },\n  // ローカルストレージに保存\n  watch: {\n    todos: {\n      // アロー関数を使うとthisの値を参照できない\n      handler: function handler(todos) {\n        todoStorage.save(todos);\n      },\n      deep: true\n    }\n  }\n});\n\n//# sourceURL=webpack://new_base_gulpjs_master_slim/./src/assets/js/main.js?");

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
