/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! myFontBold.ttf */ \"./src/myFontBold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: myFont;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n  font-family: myFont;\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgb(231, 255, 251);\\n}\\n\\n#content {\\n  width: 90%;\\n  height: 90%;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.board-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding-right: 100px;\\n}\\n\\n.board {\\n  align-self: center;\\n  height: 150px;\\n  width: 320px;\\n  background-color: rgb(41, 41, 41);\\n  border: solid 10px rgba(161, 161, 161, 0.568);\\n  border-radius: 25px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n  align-items: center;\\n  text-align: center;\\n  color: rgba(166, 255, 0, 0.6);\\n}\\n\\n.resto-name {\\n  margin-top: 15px;\\n  padding: 5px;\\n  font-size: 2.8rem;\\n  text-shadow: 3px 3px 0px rgba(153, 153, 153, 0.5);\\n}\\n\\n.resto-address,\\n.resto-time,\\n.resto-phone,\\n.resto-website {\\n  font-size: .7rem;\\n  color: rgba(153, 205, 50, 0.7);\\n}\\n.resto-time {\\n  font-size: .9rem;\\n  padding: 5px;\\n}\\n\\n/* .menu-title {\\n  color: green;\\n  font-size: 1.5rem;\\n  padding: 2px;\\n  text-shadow: 1px 2px 0px rgba(166, 255, 0, 0.3);\\n} */\\n\\n.menu-container {\\n display: flex;\\n justify-content: space-evenly;\\n align-items: center;\\n padding: 3px;\\n\\n overflow: hidden;\\n}\\n\\n.menus {\\n  width: 30%;\\n  height: 95%;\\n  padding: 5px;\\n\\n  display: grid;\\n  grid-template-rows: 65px 1fr 1fr;\\n  grid-template-columns: 2fr 1fr;\\n  gap: 3px;\\n  justify-content: center;\\n}\\n\\n.menus-0 {\\n  border-right: solid 1px rgba(128, 128, 128, 0.2);\\n}\\n\\n.menus-2 {\\n  border-left: solid 1px rgba(128, 128, 128, 0.2);\\n}\\n\\n\\n.menu-image {\\n  grid-column: 1/3;\\n  width: 100%;\\n  background-position: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n.menu-name {\\n  grid-column: 1/2;\\n}\\n\\n.menu-price {\\n  grid-column: 2/3;\\n  background-color: yellow;\\n  color: #414356;\\n  padding: 0 2px;\\n  border-radius: 5px;\\n  transform: rotate(10deg);\\n}\\n\\n.menu-description {\\n  grid-column: 1/3;\\n  font-size: .7rem;\\n  color: rgba(172, 255, 47, 0.3);\\n}\\n\\n\\n.stick-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  border-bottom: 7px solid rgb(104, 104, 104);\\n}\\n\\n.stick-back,\\n.stick-front {\\n  height: 10px;\\n  width: 15px;\\n  background-color: rgb(184, 184, 184);\\n  border-top: solid 4px grey;\\n}\\n\\n.truck-container {\\n  width: auto;\\n  height: auto;\\n  display: grid;\\n  grid-template-columns: 400px 75px;\\n  grid-template-rows: 100px 100px 20px 90px;\\n  /* background-color: antiquewhite; */\\n}\\n\\n.truck-front {\\n  grid-row: 2/3;\\n  background-color: #f4615d;\\n  border-top-right-radius: 75px;\\n\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n}\\n\\n.truck-lamp {\\n  width: 30px;\\n  height: 20px;\\n  background-color: rgb(255, 196, 0);\\n  border-top-left-radius: 10px;\\n  border-bottom-left-radius: 10px;\\n  border-top-right-radius: 3px;\\n  border-bottom-right-radius: 3px;\\n}\\n\\n.truck-body {\\n  grid-row: 1/3;\\n  background-color: #f4615d;\\n  border-top-left-radius: 25px;\\n  border-top-right-radius: 55px;\\n  border-left: solid 15px #f85752;\\n}\\n\\n.truck-chassis {\\n  grid-column: 1/3;\\n  grid-row: 3/4;\\n  width: 100%;\\n  background-color: rgb(173, 173, 173);\\n  border-radius: 10px;\\n  border-bottom: solid 8px grey;\\n  transform: scale(1.05);\\n}\\n\\n.truck-tire-back {\\n  grid-row: 4/5;\\n  grid-column: 1/2;\\n  transform: translate(35px, -50px);\\n}\\n\\n.truck-tire-front {\\n  grid-row: 4/5;\\n  grid-column: 2/3;\\n  transform: translate(-55px, -50px);\\n}\\n\\n.truck-tire-front,\\n.truck-tire-back {\\n  width: 90px;\\n  background-color: rgb(218, 218, 218);\\n  border: solid 25px rgb(90, 86, 86);\\n  border-radius: 50%;\\n}\\n\\n.truck-windows {\\n  /* background-color: yellowgreen; */\\n  display: grid;\\n  grid-template-columns: 1fr 80px;\\n  gap: 25px;\\n  padding: 25px;\\n  justify-content: center;\\n}\\n\\n.window-large {\\n  height: 120px;\\n  background-color: #414356;\\n  border-right: solid 7px #f4615d;\\n  border-left: solid 7px #f4615d;\\n  border-top-left-radius: 20px;\\n  border-top-right-radius: 20px;\\n  box-shadow: 0px 7px 0px #c5c5c5;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 0 3px;\\n}\\n\\n.window-top {\\n  height: 30px;\\n  display: grid;\\n  grid-template-columns: repeat(6, 1fr);\\n  transform: scale(1.1) translateY(-5px);\\n}\\n\\n.roof-0, .roof-2, .roof-4 {\\n  height: 30px; \\n  background-color: green;\\n  border-bottom-left-radius: 15px;\\n  border-bottom-right-radius: 15px;\\n}\\n\\n.roof-1, .roof-3, .roof-5 {\\n  height: 30px; \\n  background-color: rgb(248, 248, 248);\\n  border-bottom-left-radius: 15px;\\n  border-bottom-right-radius: 15px;\\n}\\n\\n.window-bottom {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: end;\\n  overflow: hidden;\\n}\\n\\n.chef-image {\\n  width: 90px;\\n  height: 90px;\\n  background-image: url('https://cdn-icons-png.flaticon.com/512/745/745449.png');\\n  background-position: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  transform: translateY(62px);\\n  transition: transform 10s;\\n}\\n\\n.chef-image-active {\\n  transform: translateY(11px);\\n  transition: transform .5s;\\n}\\n\\n.menu-card {\\n  width: 60px;\\n  height: 85px;\\n  background-color: #F9D468;\\n  border-radius: 5px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n\\n.window-small {\\n  height: 75px;\\n  background-color: #6edcf9;\\n  border-radius: 20px;\\n  border-top-right-radius: 35px;\\n  border-left: solid 15px #46d4fc;\\n  transition: height 3s ease-in-out;\\n}\\n\\nbutton {\\n  opacity: .75;\\n  font-size: .8rem;\\n  /* width: 60px; */\\n  padding: 1px 2px 1px;\\n  border-radius: 3.5px;\\n  background-color: yellowgreen;\\n}\\n\\nbutton:hover {\\n  background-color: lightcyan;\\n}\\n\\n/* ANIMATION MENU IN*/\\n\\n.menus-0, .menus-1, .menus-2 { \\n  transform: translateY(0px);\\n  transition: transform .5s;\\n}\\n\\n.menus-1 {\\n  transition-delay: .3s;\\n}\\n.menus-2 {\\n  transition-delay: .6s;\\n}\\n\\n.menus-0-active, .menus-1-active, .menus-2-active {\\n  transform: translateY(200px);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rest/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://rest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://rest/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rest/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenuDefault: () => (/* binding */ displayMenuDefault),\n/* harmony export */   makeFoodTruck: () => (/* binding */ makeFoodTruck),\n/* harmony export */   makeMenuButtons: () => (/* binding */ makeMenuButtons)\n/* harmony export */ });\n// ELEMENT MAKER\nconst makeElement = (type, nameClass, parent, text = '') => {\n  const element = document.createElement(type);\n  element.innerText = text;\n  element.classList.add(nameClass);\n  parent.appendChild(element);\n  return element;\n};\n\n// CLEAR ELEMENT CHILDREN\nconst clear = (element) => {\n  while (element.hasChildNodes()) {\n    element.removeChild(element.firstChild);\n  }\n};\n\n// SLIDER (simple animation)\nconst slide = (greeter, className, time) => {\n  greeter.classList.toggle(className);\n  setTimeout(function () {\n    greeter.classList.toggle(className);\n  }, time);\n};\n\n// ROOF MAKER\nconst makeRoof = (howManyTile, parent) => {\n  for (let i = 0; i < howManyTile; i++) {\n    makeElement('div', `roof-${i}`, parent);\n  }\n};\n\n// FILL BOARD = RESTO PROFILE\nconst displayMenuDefault = (array, parent) => {\n  makeElement('div', 'resto-name', parent, array.name.toUpperCase());\n  makeElement('div', 'resto-time', parent, array.time);\n  makeElement('div', 'resto-address', parent, array.address);\n  makeElement('div', 'resto-website', parent, array.website);\n};\n\n// FILL BOARD = MENU\nconst fillDisplayMenu = (array, parent) => {\n  const menuContainer = makeElement('div', 'menu-container', parent);\n  for (let i = 0; i < array.length; i++) {\n    // MENU DATA\n    const menus = makeElement('div', 'menus', menuContainer);\n    menus.classList.add(`menus-${i}`);\n    const menuImage = makeElement('div', 'menu-image', menus);\n    menuImage.style.backgroundImage = `url(${array[i].image})`;\n    makeElement('div', 'menu-name', menus, array[i].name);\n    makeElement('div', 'menu-price', menus, `$${array[i].price}`);\n    makeElement('div', 'menu-description', menus, array[i].description);\n    // MENU TRANSITION\n    const eachMenu = document.querySelector(`.menus-${i}`);\n    slide(eachMenu, `menus-${i}-active`, 100);\n  }\n};\n\n// CREATE A FOODTRUCK\nconst makeFoodTruck = (data, parent) => {\n  // TOP BOARD\n  const boardContainer = makeElement('div', 'board-container', parent);\n  const board = makeElement('div', 'board', boardContainer);\n  const stickContainer = makeElement('div', 'stick-container', boardContainer);\n  const stickBack = makeElement('div', 'stick-back', stickContainer);\n  const stickFront = makeElement('div', 'stick-front', stickContainer);\n  displayMenuDefault(data, board)\n  // TRUCK PARTS\n  const truckContainer = makeElement('div', 'truck-container', content);\n  const truckBody = makeElement('div', 'truck-body', truckContainer);\n  const truckFront = makeElement('div', 'truck-front', truckContainer);\n  const truckLamp = makeElement('div', 'truck-lamp', truckFront);\n  const truckChassis = makeElement('div', 'truck-chassis', truckContainer);\n  const truckTireBack = makeElement('div', 'truck-tire-back', truckContainer);\n  const truckTireFront = makeElement('div', 'truck-tire-front', truckContainer);\n  const truckWindows = makeElement('div', 'truck-windows', truckBody);\n  const windowLarge = makeElement('div', 'window-large', truckWindows);\n  const windowLargeTop = makeElement('div', 'window-top', windowLarge);\n  const windowLargeBottom = makeElement('div','window-bottom', windowLarge);\n  const chefImage = makeElement('div', 'chef-image', windowLargeBottom);\n  const menuCard = makeElement('div', 'menu-card', windowLargeBottom, 'MENU');\n  const windowSmall = makeElement('div', 'window-small', truckWindows);\n  makeRoof(6, windowLargeTop);\n};\n\n// MENU TABS BUTTON\nconst makeMenuButtons = (array, parent) => {\n  let allMenu = ['BURGERS', 'PIZZAS', 'SOUPS', 'DRINKS'];\n  for (let i = 0; i < allMenu.length; i++) {\n    const element = makeElement('button', 'menu-buttons', parent, allMenu[i]);\n    element.addEventListener('click', function () {\n      const chefImage = document.querySelector('.chef-image');\n      slide(chefImage, 'chef-image-active', 750);\n      const board = document.querySelector('.board');\n      clear(board);\n      fillDisplayMenu(array[allMenu[i].toLowerCase()], board);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://rest/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\n\n// MAKE TRUCKFOOD AND SIGNBOARD\n(0,_functions__WEBPACK_IMPORTED_MODULE_2__.makeFoodTruck)(_data_json__WEBPACK_IMPORTED_MODULE_1__, document.querySelector('#content'))\n\n// MAKE MENU TAB BUTTONS\n;(0,_functions__WEBPACK_IMPORTED_MODULE_2__.makeMenuButtons)(_data_json__WEBPACK_IMPORTED_MODULE_1__, document.querySelector('.menu-card'));\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/myFontBold.ttf":
/*!****************************!*\
  !*** ./src/myFontBold.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35eab922fdbe4b5324d4.ttf\";\n\n//# sourceURL=webpack://rest/./src/myFontBold.ttf?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"Meat Wagon!\",\"address\":\"48 Street and, Park Ave, New York\",\"phone\":\"+1 4-3526-4129\",\"website\":\"www.meatwagon.com\",\"time\":\"4:00 am - 10:00 pm (everyday)\",\"burgers\":[{\"name\":\"Prime\",\"description\":\"Tender and flavourful\",\"price\":10,\"image\":\"https://cdn-icons-png.flaticon.com/512/1923/1923515.png\"},{\"name\":\"Cheesie\",\"description\":\"Topped with Swiss Cheese\",\"price\":13,\"image\":\"https://cdn-icons-png.flaticon.com/512/878/878052.png\"},{\"name\":\"Maxie\",\"description\":\"Gallician style double beefs\",\"price\":16,\"image\":\"https://cdn-icons-png.flaticon.com/512/1720/1720602.png\"}],\"soups\":[{\"name\":\"Caldo\",\"description\":\"Popular in Mexico\\'s coast\",\"price\":5,\"image\":\"https://cdn-icons-png.flaticon.com/512/7922/7922456.png\"},{\"name\":\"Buridda\",\"description\":\"Famous Italian seafood stew\",\"price\":7,\"image\":\"https://cdn-icons-png.flaticon.com/512/7922/7922475.png\"},{\"name\":\"Kalakeitto\",\"description\":\"Traditional Finnish cuisine\",\"price\":7,\"image\":\"https://cdn-icons-png.flaticon.com/512/7922/7922473.png\"}],\"pizzas\":[{\"name\":\"Stagioni\",\"description\":\"Artichokes, basil and ham \",\"price\":20,\"image\":\"https://cdn-icons-png.flaticon.com/512/8692/8692163.png\"},{\"name\":\"Formaggi\",\"description\":\"Goat cheese and gorgonzola\",\"price\":23,\"image\":\"https://cdn-icons-png.flaticon.com/512/8713/8713429.png\"},{\"name\":\"Ricotta\",\"description\":\"Spinach, tomatoes and mozzarella\",\"price\":25,\"image\":\"https://cdn-icons-png.flaticon.com/512/8494/8494677.png\"}],\"drinks\":[{\"name\":\"Juice\",\"description\":\"Orange, Lemon or Pineapple\",\"price\":12,\"image\":\"https://cdn-icons-png.flaticon.com/512/1784/1784105.png\"},{\"name\":\"Milkshake\",\"description\":\"Strawberry, Vanilla, or Chocolate\",\"price\":10,\"image\":\"https://cdn-icons-png.flaticon.com/512/1784/1784110.png\"},{\"name\":\"Coffee\",\"description\":\"Latte, Cappucino or Espresso\",\"price\":7,\"image\":\"https://cdn-icons-png.flaticon.com/512/1784/1784092.png\"}]}');\n\n//# sourceURL=webpack://rest/./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;