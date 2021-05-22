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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": () => (/* binding */ About)\n/* harmony export */ });\nconst About = () => {\n  //parent about section\n  const aboutSection = document.createElement(\"section\");\n  aboutSection.classList.add(\"about\");\n\n  //bbq image\n  const bbqImg = document.createElement(\"img\");\n  bbqImg.classList.add(\"img\", \"img__bbq\");\n  bbqImg.alt = \"BBQ picture\";\n  bbqImg.src = \"../images/bbq-stock.jpg\";\n  aboutSection.appendChild(bbqImg);\n\n  //about content container\n  const aboutContent = document.createElement(\"div\");\n  aboutContent.classList.add(\"about__content\");\n  aboutSection.appendChild(aboutContent);\n\n  //about header\n  const aboutHeader = document.createElement(\"h2\");\n  aboutHeader.classList.add(\"about__header\");\n  aboutHeader.textContent = \"Why Crunch's BBQ?\";\n  aboutContent.appendChild(aboutHeader);\n\n  //about details\n  const aboutDetails = document.createElement(\"p\");\n  aboutDetails.classList.add(\"about__details\");\n  aboutDetails.textContent =\n    \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.\";\n  aboutContent.appendChild(aboutDetails);\n\n  return aboutSection;\n};\n\n/*\n        <section class=\"about\">\n            <img class=\"img img__bbq\" src=\"../images/bbq-stock.jpg\" alt=\"BBQ\">\n            <div class=\"about__content\">\n                <h2 class=\"about__header\">Why Crunch's BBQ?</h2>\n                <p class=\"about__details\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quos voluptas maiores earum consequatur unde itaque illo aliquid veniam et consequuntur dolore, sunt error sint est ipsum, dolor excepturi ullam.</p>\n            </div>\n        </section>\n*/\n\n\n//# sourceURL=webpack://Restaurant/./src/About.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\nconst Contact = () => {\n    const contactContainer = document.createElement(\"section\");\n    contactContainer.className = \"contact__container\";\n\n    const header = document.createElement(\"h2\");\n    header.classList.add(\"contactHeader\");\n    header.textContent = \"Hit Us Up!\";\n    contactContainer.appendChild(header);\n\n    const address = document.createElement(\"p\");\n    address.classList.add(\"address\");\n    address.innerHTML = \"12345 Main St<br>Marseilles, IL\";\n    contactContainer.appendChild(address);\n\n    const phone = document.createElement(\"p\");\n    phone.classList.add(\"phone\");\n    phone.textContent = '(815)123-4567';\n    contactContainer.appendChild(phone);\n\n    const map = document.createElement(\"img\");\n    map.classList.add(\"mapImg\");\n    map.src = '../images/FakeMap.png'\n    map.alt = \"Crunch's BBQ location\"\n    contactContainer.appendChild(map);\n\n    return contactContainer;\n}\n\n/*\n    contact container\n        header\n        address\n        phone num\n        image\n*/\n\n//# sourceURL=webpack://Restaurant/./src/Contact.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\nconst Menu = () => {\n  const menuContainer = document.createElement(\"section\");\n  menuContainer.classList.add(\"menu__container\");\n\n  const menuHeader = document.createElement(\"h1\");\n  menuHeader.classList.add(\"menu__header\");\n  menuHeader.textContent = \"What's on the grill?\";\n  menuContainer.appendChild(menuHeader);\n\n  const menuItems = document.createElement(\"div\");\n  menuItems.classList.add(\"menuItems\");\n  menuContainer.appendChild(menuItems);\n\n  const foods = [\n    {\n      name: \"Hawaiian Sliders\",\n      price: \"$12\",\n      imgSrc: \"../images/pulled-pork-stock.jpg\"\n    },\n    {\n      name: \"Crunch's Brisket\",\n      price: \"$14\",\n      imgSrc: \"../images/brisket-stock.webp\"\n    },\n    {\n      name: \"Classic Ribs\",\n      price: \"$16\",\n      imgSrc: \"../images/ribs-stock.jpg\"\n    }\n  ];\n\n  for (let i = 0; i < foods.length; i++) {\n      const menuItem = document.createElement(\"div\");\n      menuItem.classList.add(\"item\");\n\n      const itemImg = document.createElement(\"img\");\n      itemImg.classList.add(\"menuImg\");\n      itemImg.src = foods[i].imgSrc;\n      itemImg.alt = foods[i].name;\n      menuItem.appendChild(itemImg);\n\n      const info = document.createElement(\"div\");\n      info.classList.add(\"info\");\n      menuItem.appendChild(info);\n\n      const foodName = document.createElement(\"h2\");\n      foodName.classList.add(\"foodName\");\n      foodName.textContent = foods[i].name;\n      info.appendChild(foodName);\n\n      const foodPrice = document.createElement(\"h2\");\n      foodPrice.classList.add(\"foodName\");\n      foodPrice.textContent = foods[i].price;\n      info.appendChild(foodPrice);\n\n      menuItems.appendChild(menuItem);\n  }\n\n  return menuContainer;\n\n};\n\n/*\ndiv menu container\n    menu header\n    menu item container div * 3\n        menu item div \n            image\n            content div\n                name\n                price\nclose div\n*/\n\n\n//# sourceURL=webpack://Restaurant/./src/Menu.js?");

/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": () => (/* binding */ Nav)\n/* harmony export */ });\nconst Nav = () => {\n    //create nav parent element\n    const navBar = document.createElement(\"nav\");\n    navBar.classList.add(\"navbar\");\n\n    //create navbar item container\n    const navContainer = document.createElement(\"div\");\n    navContainer.classList.add(\"navbar__container\");\n    navBar.appendChild(navContainer);\n\n    //create nav header\n    const navHeader = document.createElement(\"h1\");\n    navHeader.classList.add(\"nav__header\");\n    navHeader.textContent = \"Crunch's BBQ\";\n    navContainer.appendChild(navHeader);\n\n    //create UL for navigation\n    const navLinks = document.createElement(\"ul\");\n    navLinks.classList.add(\"nav__links\");\n    navContainer.appendChild(navLinks);\n\n    //link for about\n    const about = document.createElement('li');\n    about.classList.add(\"nav__link\");\n    about.id = \"about\";\n    about.textContent = \"About\"\n    navLinks.appendChild(about);\n\n    //link for menu\n    const menu = document.createElement('li');\n    menu.classList.add(\"nav__link\");\n    menu.id = \"menu\";\n    menu.textContent = \"Menu\"\n    navLinks.appendChild(menu);\n    \n    //link for contact\n    const contact = document.createElement('li');\n    contact.classList.add(\"nav__link\");\n    contact.id = \"contact\";\n    contact.textContent = \"Contact\"\n    navLinks.appendChild(contact);\n\n    return navBar;\n}\n\n/*\n        <nav class=\"navbar\">\n            <div class=\"navbar__container\">\n                <h1 class=\"nav__header\">Crunch's BBQ</h1>\n                <ul class=\"nav__links\">\n                    <li id=\"about\" class=\"nav__link\">About</li>\n                    <li id=\"menu\" class=\"nav__link\">Menu</li>\n                    <li id=\"contact\" class=\"nav__link\">Contact</li>\n                </ul>\n            </div>\n        </nav>\n*/\n\n\n//# sourceURL=webpack://Restaurant/./src/Nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ \"./src/Nav.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n\n\n\n\n\n//load Nav and About section on page load\nconst content = document.getElementById(\"content\");\ncontent.appendChild((0,_Nav__WEBPACK_IMPORTED_MODULE_0__.Nav)());\ncontent.appendChild((0,_About__WEBPACK_IMPORTED_MODULE_1__.About)());\ndocument.getElementById(\"about\").classList.add(\"active\");\n\n[\"about\", \"menu\", \"contact\"].forEach((link) => {\n    document.getElementById(link).addEventListener(\"click\", (e) => {\n        //clear #content of everything but nav\n        while (content.lastElementChild.className !== \"navbar\") {\n            content.removeChild(content.lastElementChild);\n        }\n\n        document.querySelector(\".active\").classList.remove(\"active\");\n        e.target.classList.add(\"active\");\n\n        //append proper page to DOM\n        if (e.target.id === \"about\") {\n            content.appendChild((0,_About__WEBPACK_IMPORTED_MODULE_1__.About)());\n        } else if (e.target.id === \"menu\") {\n            content.appendChild((0,_Menu__WEBPACK_IMPORTED_MODULE_2__.Menu)());\n        } else if (e.target.id === \"contact\") {\n            content.appendChild((0,_Contact__WEBPACK_IMPORTED_MODULE_3__.Contact)());\n        }\n    })\n})\n\n//# sourceURL=webpack://Restaurant/./src/index.js?");

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