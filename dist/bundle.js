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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"d\"] = getRandomNumber;\nconst ENTER_KEYCODE = 13;\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = ENTER_KEYCODE;\n\nconst ESC_KEYCODE = 27;\n/* harmony export (immutable) */ __webpack_exports__[\"c\"] = ESC_KEYCODE;\n\nconst lodgeType = {\n  bungalo: 'Бунгало',\n  flat: 'Квартира',\n  house: 'Дом'\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = lodgeType;\n\n\nfunction getRandomNumber(min, max) {\n  return Math.floor(min + Math.random() * (max - min + 1));\n}\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./util.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./util.js?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ads; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return features; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ad__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offer__ = __webpack_require__(6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(0);\n\n\n\n\n\n\nconst title = `\n  \"Большая уютная квартира\",\n  \"Маленькая неуютная квартира\",\n  \"Огромный прекрасный дворец\",\n  \"Маленький ужасный дворец\",\n  \"Красивый гостевой домик\",\n  \"Некрасивый негостеприимный домик\",\n  \"Уютное бунгало далеко от моря\",\n  \"Неуютное бунгало по колено в воде\"\n  `.split(',');\ntitle.forEach((item, i) => {\n  title[i] = item.replace(/\"/g, '').trim();\n});\nconst times = ['12:00', '13:00', '14:00'];\nconst features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];\nconst ads = [];\nconst tempSet = new Set();\nconst tokyoPinMap = document.querySelector('.tokyo__pin-map');\n\n\n// По заданию генерируем 8 неповторяющихся объявлений\n//\nwhile (ads.length < 8) {\n  let tempNum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__[\"d\" /* getRandomNumber */])(1, 8);\n  if (!tempSet.has(tempNum)) {\n    let tempLocation = new __WEBPACK_IMPORTED_MODULE_2__location__[\"a\" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__[\"d\" /* getRandomNumber */])(300, 900), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__[\"d\" /* getRandomNumber */])(100, 500));\n    ads.push(new __WEBPACK_IMPORTED_MODULE_0__ad__[\"a\" /* default */]('0' + tempNum, new __WEBPACK_IMPORTED_MODULE_1__offer__[\"a\" /* default */](title[tempNum - 1], tempLocation, times[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__[\"d\" /* getRandomNumber */])(0, 2)], times[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__[\"d\" /* getRandomNumber */])(0, 2)]), tempLocation));\n    tempSet.add(tempNum);\n  }\n}\ntempSet.clear();\n\n{\n  // Отрисовка сгенерированных DOM-элементов в блок .tokyo__pin-map\n  const tempFragment = document.createDocumentFragment();\n  for (let value of ads) {\n    let tempContainer = document.createElement('div');\n    let tempImg = document.createElement('img');\n    tempImg.setAttribute('tabindex', '0');\n    tempContainer.appendChild(tempImg);\n    tempContainer.className = 'pin';\n    tempContainer.children[0].className = 'rounded';\n    tempContainer.children[0].setAttribute('width', 40);\n    tempContainer.children[0].setAttribute('height', 40);\n    tempContainer.style.left = value.location.x - tempContainer.children[0].getAttribute('width') / 2 + 'px';\n    tempContainer.style.top = value.location.y - tempContainer.children[0].getAttribute('height') / 2 + 'px';\n    tempContainer.children[0].src = value.author.avatar;\n    tempFragment.appendChild(tempContainer);\n  }\n  tokyoPinMap.appendChild(tempFragment);\n}\n\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./default_ad.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./default_ad.js?");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return dialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return openPopUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return closePopUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return closePopUpPressEsc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return checkContainsPin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return togglePinActive; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_ad__ = __webpack_require__(1);\n\n\n\n\nconst dialog = document.querySelector('.dialog');\nconst lodgeTemplate = document.querySelector('#lodge-template').content;\nconst tokyoPinMap = document.querySelector('.tokyo__pin-map');\n\n\nconst addPopUpInf = (container) => {\n  let current;\n  for (let it of __WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */]) {\n    if (it.author.avatar === container.querySelector('img').getAttribute('src')) {\n      current = it;\n      break;\n    }\n  }\n  let dialogPanel = dialog.querySelector('.dialog__panel');\n  const tempContainer = lodgeTemplate.cloneNode(true);\n  tempContainer.querySelector('.lodge__title').textContent = current.offer.title;\n  tempContainer.querySelector('.lodge__price').textContent = `${current.offer.price}` + '\\u20BD/ночь';\n  tempContainer.querySelector('.lodge__type').textContent = `${__WEBPACK_IMPORTED_MODULE_0__util__[\"a\" /* lodgeType */][current.offer.type]}`;\n  tempContainer.querySelector('.lodge__rooms-and-guests').textContent = `Для ${current.offer.guests} гостей в ${current.offer.rooms} комнатах`;\n  tempContainer.querySelector('.lodge__checkin-time').textContent = `Заезд после ${current.offer.checkin}, выезд до ${current.offer.checkout}`;\n  {\n    const fragment = document.createDocumentFragment();\n    let temp;\n    for (let item of current.offer.feauters) {\n      temp = document.createElement('span');\n      temp.className = `feature__image feature__image--${item}`;\n      fragment.appendChild(temp);\n    }\n    tempContainer.querySelector('.lodge__features').appendChild(fragment);\n  }\n  tempContainer.querySelector('.lodge__description').textContent = `${current.offer.description}`;\n  dialogPanel.parentElement.replaceChild(tempContainer, dialogPanel);\n  document.querySelector('.dialog__title').querySelector('img').src = `${current.author.avatar}`;\n};\nconst openPopUp = (container) => {\n  addPopUpInf(container);\n  dialog.classList.remove('hidden');\n  document.addEventListener('keydown', closePopUpPressEsc);\n};\nconst closePopUp = () => {\n  dialog.classList.add('hidden');\n  tokyoPinMap.querySelector('.pin--active').classList.remove('pin--active');\n  document.removeEventListener('keydown', closePopUpPressEsc);\n};\nconst closePopUpPressEsc = (e) => {\n  if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util__[\"c\" /* ESC_KEYCODE */]) {\n    closePopUp();\n  }\n};\nconst checkContainsPin = (container) => {\n  return container.classList.contains('pin');\n};\nconst togglePinActive = (container) => {\n  const tempCheck = tokyoPinMap.querySelector('.pin--active');\n  if (tempCheck) {\n    tempCheck.classList.remove('pin--active');\n  }\n  container.classList.toggle('pin--active');\n};\n\n\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./pop_up.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./pop_up.js?");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Ad {\n  constructor(num, offer, location) {\n    this.author = {avatar: `img/avatars/user${num}.png`};\n    this.offer = offer;\n    this.location = location;\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Ad;\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./ad.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./ad.js?");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_ad__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_up__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form__ = __webpack_require__(7);\n\n\n\n\n\nconst dialogBtn = __WEBPACK_IMPORTED_MODULE_2__pop_up__[\"a\" /* dialog */].querySelector('.dialog__close');\nconst mapPins = document.querySelector('.tokyo');\n\n\n{\n  // Отрисовка первого объявления по заданию\n  const dialogPanel = document.querySelector('.dialog__panel');\n  const lodgeTemplate = document.querySelector('#lodge-template').content;\n  const tempContainer = lodgeTemplate.cloneNode(true);\n  tempContainer.querySelector('.lodge__title').textContent = __WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.title;\n  tempContainer.querySelector('.lodge__price').textContent = `${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.price}` + '\\u20BD/ночь';\n  tempContainer.querySelector('.lodge__type').textContent = `${__WEBPACK_IMPORTED_MODULE_0__util__[\"a\" /* lodgeType */][__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.type]}`;\n  tempContainer.querySelector('.lodge__rooms-and-guests').textContent = `Для ${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.guests} гостей в ${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.rooms} комнатах`;\n  tempContainer.querySelector('.lodge__checkin-time').textContent = `Заезд после ${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.checkin}, выезд до ${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.checkout}`;\n  {\n    const fragment = document.createDocumentFragment();\n    let temp;\n    for (let item of __WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.feauters) {\n      temp = document.createElement('span');\n      temp.className = `feature__image feature__image--${item}`;\n      fragment.appendChild(temp);\n    }\n    tempContainer.querySelector('.lodge__features').appendChild(fragment);\n  }\n  tempContainer.querySelector('.lodge__description').textContent = `${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].offer.description}`;\n  dialogPanel.parentElement.replaceChild(tempContainer, dialogPanel);\n  document.querySelector('.dialog__title').querySelector('img').src = `${__WEBPACK_IMPORTED_MODULE_1__default_ad__[\"a\" /* ads */][0].author.avatar}`;\n  document.addEventListener('keydown', __WEBPACK_IMPORTED_MODULE_2__pop_up__[\"b\" /* closePopUpPressEsc */]);\n}\n\ndialogBtn.addEventListener('click', __WEBPACK_IMPORTED_MODULE_2__pop_up__[\"c\" /* closePopUp */]);\ndialogBtn.addEventListener('click', (e) => {\n  if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util__[\"b\" /* ENTER_KEYCODE */]) {\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"c\" /* closePopUp */])();\n  }\n});\nmapPins.addEventListener('click', (e) => {\n  const tempContainer = e.target.parentElement;\n  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"d\" /* checkContainsPin */])(tempContainer)) {\n    return;\n  }\n  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"e\" /* togglePinActive */])(tempContainer);\n  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"f\" /* openPopUp */])(tempContainer);\n});\nmapPins.addEventListener('keydown', (e) => {\n  if (e.keyCode === __WEBPACK_IMPORTED_MODULE_0__util__[\"b\" /* ENTER_KEYCODE */]) {\n    const tempContainer = e.target.parentElement;\n    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"d\" /* checkContainsPin */])(tempContainer)) {\n      return;\n    }\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"e\" /* togglePinActive */])(tempContainer);\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__pop_up__[\"f\" /* openPopUp */])(tempContainer);\n  }\n});\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Location {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Location;\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./location.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./location.js?");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_ad__ = __webpack_require__(1);\n\n\n\n\nclass Offer {\n  constructor(heading, location, checkin, checkout) {\n    this.title = heading;\n    this.address = `${location.x} , ${location.y}`;\n    this.price = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__[\"d\" /* getRandomNumber */])(1000, 1000000);\n    this.type = (function () {\n      let temp = heading.toLowerCase();\n      if (~temp.indexOf('домик') || ~heading.indexOf('дворец')) {\n        return 'house';\n      }\n      if (~temp.indexOf('бунгало')) {\n        return 'bungalo';\n      }\n      return 'flat';\n    })(heading);\n    this.rooms = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__[\"d\" /* getRandomNumber */])(1, 5);\n    // по заданию случайное кол-во, указано 20\n    this.guests = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__[\"d\" /* getRandomNumber */])(1, 20);\n    this.checkin = (function () {\n      switch (checkin) {\n        case '12:00' : break;\n        case '13:00' : break;\n        case '14:00' : break;\n        default: {\n          try {\n            throw new CheckInError('Ошибка со временем, должно быть 12:00/13:00/14:00');\n          } catch (e) {\n            if (e.name === 'CheckInError') {\n              console.log(e.message);\n            } else {\n              throw e;\n            }\n          }\n        }\n      }\n      return checkin;\n    })(checkin);\n    this.checkout = (function () {\n      switch (checkin) {\n        case '12:00' : break;\n        case '13:00' : break;\n        case '14:00' : break;\n        default: {\n          try {\n            throw new CheckInError('Ошибка со временем, должно быть 12:00/13:00/14:00');\n          } catch (e) {\n            if (e.name === 'CheckInError') {\n              console.log(e.message);\n            } else {\n              throw e;\n            }\n          }\n        }\n      }\n      return checkout;\n    })(checkout);\n    this.feauters = __WEBPACK_IMPORTED_MODULE_1__default_ad__[\"b\" /* features */].slice(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__[\"d\" /* getRandomNumber */])(1, __WEBPACK_IMPORTED_MODULE_1__default_ad__[\"b\" /* features */].length));\n    this.description = '';\n    this.photos = [];\n  }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Offer;\n\n\nfunction CheckInError(message) {\n  this.name = 'CheckInError';\n  this.message = message;\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./offer.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./offer.js?");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const form = document.querySelector('.notice__form');\nconst chAdress = form.querySelector('#address');\nconst timeIn = form.querySelector('#timein');\nconst timeOut = form.querySelector('#timeout');\nconst typeRoom = form.querySelector('#type');\nconst price = form.querySelector('#price');\nconst capacity = form.querySelector('#capacity');\nconst roomNumber = form.querySelector('#room_number');\nconst heading = form.querySelector('#title');\nconst sendForm = (e) => {\n  if (!checkAdress()) {\n    e.preventDefault();\n  } else if (!checkPrice()) {\n    e.preventDefault();\n  } else if (!checkTitle()) {\n    e.preventDefault();\n  } else {\n    e.currentTarget.reset();\n  }\n};\nchAdress.addEventListener('invalid', () => {\n  if (chAdress.validity.tooShort) {\n    chAdress.setCustomValidity('Адрес должен состоять минимум из 11 символов[ул.#### д.#');\n  } else if (chAdress.validity.tooLong) {\n    chAdress.setCustomValidity('Адрес должен состоять максимум из 54 символов[ул.#### д.#');\n  } else if (chAdress.validity.patternMismatch) {\n    chAdress.setCustomValidity('Адрес должен быть вида [ул.#### д.#');\n  } else if (chAdress.validity.valueMissing) {\n    chAdress.setCustomValidity('Обязательное поле [ул.#### д.#');\n  } else {\n    chAdress.setCustomValidity('');\n  }\n});\nchAdress.addEventListener('input', () => {\n  if (chAdress.value.length < 11) {\n    chAdress.setCustomValidity('Адрес должен состоять минимум из 11 символов[ул.#### д.#');\n  } else if (chAdress.validity.patternMismatch) {\n    chAdress.setCustomValidity('Адрес должен быть вида [ул.#### д.#');\n  } else {\n    chAdress.style.boxShadow = 'none';\n    chAdress.setCustomValidity('');\n  }\n});\nheading.addEventListener('input', () => {\n  if (heading.value.length > 29) {\n    heading.style.boxShadow = 'none';\n  }\n});\nprice.addEventListener('input', () => {\n  if (price.value.length > 0) {\n    price.style.boxShadow = 'none';\n  }\n});\ntimeIn.addEventListener('blur', function () {\n  timeOut.querySelector('[selected]').removeAttribute('selected');\n  timeOut.querySelector(`[value=\"${this.value}\"]`).setAttribute('selected', 'selected');\n});\ntypeRoom.addEventListener('blur', (e) => {\n  switch (e.target.value) {\n    case 'bungalo':\n      price.setAttribute('min', '0');\n      price.setAttribute('placeholder', '0');\n      break;\n    case 'flat':\n      price.setAttribute('min', '1000');\n      price.setAttribute('placeholder', '1000');\n      break;\n    case 'house':\n      price.setAttribute('min', '5000');\n      price.setAttribute('placeholder', '5000');\n      break;\n    case 'palace':\n      price.setAttribute('min', '10000');\n      price.setAttribute('placeholder', '10000');\n      break;\n  }\n});\nroomNumber.addEventListener('blur', (e) => {\n  switch (e.target.value) {\n    case '1':\n      capacity.querySelector('[selected]').removeAttribute('selected');\n      capacity.querySelector(`[value=\"1\"]`).setAttribute('selected', 'selected');\n      break;\n    case '2':\n      capacity.querySelector('[selected]').removeAttribute('selected');\n      capacity.querySelector(`[value=\"2\"]`).setAttribute('selected', 'selected');\n      break;\n    case '3':\n      capacity.querySelector('[selected]').removeAttribute('selected');\n      capacity.querySelector(`[value=\"3\"]`).setAttribute('selected', 'selected');\n      break;\n    case '100':\n      capacity.querySelector('[selected]').removeAttribute('selected');\n      capacity.querySelector(`[value=\"0\"]`).setAttribute('selected', 'selected');\n      break;\n  }\n});\nform.addEventListener('submit', sendForm);\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./form.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./form.js?");

/***/ })
/******/ ]);