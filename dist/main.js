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

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n  //parent about section\n  const aboutSection = document.createElement(\"section\");\n  aboutSection.classList.add(\"about\");\n\n  //bbq image\n  const bbqImg = document.createElement(\"img\");\n  bbqImg.classList.add(\"img\", \"img__bbq\");\n  bbqImg.alt = \"BBQ picture\";\n  bbqImg.src = \"../images/bbq-stock.jpg\";\n  aboutSection.appendChild(bbqImg);\n\n  //about content container\n  const aboutContent = document.createElement(\"div\");\n  aboutContent.classList.add(\"about__content\");\n  aboutSection.appendChild(aboutContent);\n\n  //about header\n  const aboutHeader = document.createElement(\"h2\");\n  aboutHeader.classList.add(\"about__header\");\n  aboutHeader.textContent = \"Why Crunch's BBQ?\";\n  aboutContent.appendChild(aboutHeader);\n\n  //about details\n  const aboutDetails = document.createElement(\"p\");\n  aboutDetails.classList.add(\"about__details\");\n  aboutDetails.textContent =\n    \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.\";\n  aboutContent.appendChild(aboutDetails);\n\n  return aboutSection;\n};\n\n/*\n        <section class=\"about\">\n            <img class=\"img img__bbq\" src=\"../images/bbq-stock.jpg\" alt=\"BBQ\">\n            <div class=\"about__content\">\n                <h2 class=\"about__header\">Why Crunch's BBQ?</h2>\n                <p class=\"about__details\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.</p>\n            </div>\n        </section>\n*/\n\n\n//# sourceURL=webpack://Restaurant/./src/About.js?");

/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\nconst nav = () => {\n    //create nav parent element\n    const navBar = document.createElement(\"nav\");\n    navBar.classList.add(\"navbar\");\n\n    //create navbar item container\n    const navContainer = document.createElement(\"div\");\n    navContainer.classList.add(\"navbar__container\");\n    navBar.appendChild(navContainer);\n\n    //create nav header\n    const navHeader = document.createElement(\"h1\");\n    navHeader.classList.add(\"nav__header\");\n    navHeader.textContent = \"Crunch's BBQ\";\n    navContainer.appendChild(navHeader);\n\n    //create UL for navigation\n    const navLinks = document.createElement(\"ul\");\n    navLinks.classList.add(\"nav__links\");\n    navContainer.appendChild(navLinks);\n\n    //link for about\n    const about = document.createElement('li');\n    about.classList.add(\"nav__link\");\n    about.id = \"about\";\n    about.textContent = \"About\"\n    navLinks.appendChild(about);\n\n    //link for menu\n    const menu = document.createElement('li');\n    menu.classList.add(\"nav__link\");\n    menu.id = \"menu\";\n    menu.textContent = \"Menu\"\n    navLinks.appendChild(menu);\n    \n    //link for contact\n    const contact = document.createElement('li');\n    contact.classList.add(\"nav__link\");\n    contact.id = \"contact\";\n    contact.textContent = \"Contact\"\n    navLinks.appendChild(contact);\n\n    return navBar;\n}\n\n/*\n        <nav class=\"navbar\">\n            <div class=\"navbar__container\">\n                <h1 class=\"nav__header\">Crunch's BBQ</h1>\n                <ul class=\"nav__links\">\n                    <li id=\"about\" class=\"nav__link\">About</li>\n                    <li id=\"menu\" class=\"nav__link\">Menu</li>\n                    <li id=\"contact\" class=\"nav__link\">Contact</li>\n                </ul>\n            </div>\n        </nav>\n*/\n\n\n//# sourceURL=webpack://Restaurant/./src/Nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ \"./src/Nav.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n\n\n\nconst content = document.getElementById(\"content\");\ncontent.appendChild((0,_Nav__WEBPACK_IMPORTED_MODULE_0__.nav)());\ncontent.appendChild((0,_About__WEBPACK_IMPORTED_MODULE_1__.about)());\n\n//# sourceURL=webpack://Restaurant/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;