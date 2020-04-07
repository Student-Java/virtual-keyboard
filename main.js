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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: config, layout, defaultValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultValues", function() { return defaultValues; });
const config = {
  Backquote: {en: ['`', '~'], ru: 'ё'},
  Backslash: {en: ['\\', '|'], ru: ['\\', '/']},
  BracketLeft: {en: ['[', '{'], ru: 'х'},
  BracketRight: {en: [']', '}'], ru: 'ъ'},
  Comma: {en: [',', '<'], ru: ['б', 'Б']},
  Digit0: {en: ['0', ')'], ru: ['0', ')']},
  Digit1: {en: ['1', '!'], ru: ['1', '!']},
  Digit2: {en: ['2', '@'], ru: ['2', '"']},
  Digit3: {en: ['3', '#'], ru: ['3', '№']},
  Digit4: {en: ['4', '$'], ru: ['4', ';']},
  Digit5: {en: ['5', '%'], ru: ['5', '%']},
  Digit6: {en: ['6', '^'], ru: ['6', ':']},
  Digit7: {en: ['7', '&'], ru: ['7', '?']},
  Digit8: {en: ['8', '*'], ru: ['8', '*']},
  Digit9: {en: ['9', '('], ru: ['9', '(']},
  Equal: {en: ['=', '+'], ru: ['=', '+']},
  KeyA: {en: 'a', ru: 'ф'},
  KeyB: {en: 'b', ru: 'и'},
  KeyC: {en: 'c', ru: 'с'},
  KeyD: {en: 'd', ru: 'в'},
  KeyE: {en: 'e', ru: 'у'},
  KeyF: {en: 'f', ru: 'а'},
  KeyG: {en: 'g', ru: 'п'},
  KeyH: {en: 'h', ru: 'р'},
  KeyI: {en: 'i', ru: 'ш'},
  KeyJ: {en: 'j', ru: 'о'},
  KeyK: {en: 'k', ru: 'л'},
  KeyL: {en: 'l', ru: 'д'},
  KeyM: {en: 'm', ru: 'ь'},
  KeyN: {en: 'n', ru: 'т'},
  KeyO: {en: 'o', ru: 'щ'},
  KeyP: {en: 'p', ru: 'з'},
  KeyQ: {en: 'q', ru: 'й'},
  KeyR: {en: 'r', ru: 'к'},
  KeyS: {en: 's', ru: 'ы'},
  KeyT: {en: 't', ru: 'е'},
  KeyU: {en: 'u', ru: 'г'},
  KeyV: {en: 'v', ru: 'м'},
  KeyW: {en: 'w', ru: 'ц'},
  KeyX: {en: 'x', ru: 'ч'},
  KeyY: {en: 'y', ru: 'н'},
  KeyZ: {en: 'z', ru: 'я'},
  Period: {en: ['.', '>'], ru: 'ю'},
  Quote: {en: ['\'', '"'], ru: 'э'},
  Semicolon: {en: [';', ':'], ru: 'ж'},
  Minus: {en: ['-', '_'], ru: ['-', '_']},
  Slash: {en: ['/', '?'], ru: ['.', ',']},
  Space: {en: ' ', ru: ' ', special: true},
  AltLeft: {en: 'Alt', ru: 'Alt', special: true},
  AltRight: {en: 'Alt', ru: 'Alt', special: true},
  ArrowDown: {en: '∨', ru: '∨', special: true},
  ArrowLeft: {en: '<', ru: '<', special: true},
  ArrowRight: {en: '>', ru: '>', special: true},
  ArrowUp: {en: '∧', ru: '∧', special: true},
  Backspace: {en: 'Backspace', ru: 'Backspace', special: true},
  CapsLock: {en: 'Caps Lock', ru: 'Caps Lock', special: true},
  ControlLeft: {en: 'Ctrl', ru: 'Ctrl', special: true},
  ControlRight: {en: 'Ctrl', ru: 'Ctrl', special: true},
  Delete: {en: 'DEL', ru: 'DEL', special: true},
  Enter: {en: 'Enter', ru: 'Enter', special: true},
  MetaLeft: {en: 'Win', ru: 'Win', special: true},
  Shift: {en: 'Shift', ru: 'Shift', special: true},
  Tab: {en: 'Tab', ru: 'Tab', special: true}
};

const layout = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', ['Backspace', 2]],
  [['Tab', 2], 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  [['CapsLock', 2], 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', ['Enter', 2]],
  [['Shift', 2], 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Delete'],
  [['ControlLeft', 2], ['MetaLeft', 1.5], ['AltLeft', 1.5], ['Space', 3.35], ['AltRight', 1.5], ['ControlRight', 1.5], 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const defaultValues = {
  buttonMinWidth: 10,
  buttonWidth: 4,
  lang: 'en',
  altLang: 'ru'
}


/***/ }),

/***/ "./drawKeyboard.js":
/*!*************************!*\
  !*** ./drawKeyboard.js ***!
  \*************************/
/*! exports provided: drawKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawKeyboard", function() { return drawKeyboard; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ "./config/config.js");



const drawKeyboard = parentElement => {

  parentElement.innerHTML = '';
  for (const layoutGroup of _config_config__WEBPACK_IMPORTED_MODULE_0__["layout"]) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.append(
      ...layoutGroup
        .map(el =>
          Array.isArray(el)
            ? {id: el[0], width: el[1]}
            : {id: el, width: 1})
        .map(createButton)
    );

    parentElement.append(rowDiv);
  }
}

const createButton = ({id, width}) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button');
  buttonContainer.id = id;
  buttonContainer.style.width = `${_config_config__WEBPACK_IMPORTED_MODULE_0__["defaultValues"].buttonWidth * width}vw`;
  buttonContainer.style.minWidth = `${_config_config__WEBPACK_IMPORTED_MODULE_0__["defaultValues"].buttonMinWidth * width}px`;
  buttonContainer.append(document.createElement('span'));
  return buttonContainer;
};


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./assets/style.css");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawKeyboard */ "./drawKeyboard.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config */ "./config/config.js");
/* harmony import */ var _renderLetters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/renderLetters */ "./renderLetters.js");





const state = {
  CapsLock: false,
  shift: false,
  ControlLeft: false,
  lang: _config_config__WEBPACK_IMPORTED_MODULE_2__["defaultValues"].lang,
  start: 0,
  end: 0
}

const body = document.querySelector('body');
const content = document.createElement('section');
content.classList.add('content')
body.append(content);
const textarea = document.createElement('textarea');
content.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
content.append(keyboard);
const disclaimer = document.createElement('div');
disclaimer.classList.add('disclaimer');
disclaimer.innerHTML = 'Left Ctrl + Shift - переключить язык<br>' +
  'собранный проект в gh-pages. Огромная просьба оставлять развернутый комментарий и свой ник, спасибо!';
const localStorage = window.localStorage;
if (localStorage.getItem('lang')) {
  state.lang = localStorage.getItem('lang')
}

content.append(disclaimer);

'click'.split(' ')
  .forEach(evt => textarea.addEventListener(evt, (e) => {
      state.start = e.target.selectionStart;
      state.end = e.target.selectionEnd;
    })
  );

const fireKeyEvent = (target, eventName) => {
  document
    .querySelector('body')
    .dispatchEvent(
      new CustomEvent(
        eventName,
        {
          detail: {
            code: target.id,
            key: _config_config__WEBPACK_IMPORTED_MODULE_2__["config"][target.id].en
          }
        }
      )
    );
};

keyboard.addEventListener('mousedown', (e) => {
  const target = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
  if (target.id) {
    fireKeyEvent(target, 'keydown');

    target.addEventListener(
      'mouseup',
      () => {
        fireKeyEvent(target, 'keyup');
      },
      false
    );
  }
});

const onLoad = () => {
  Object(_drawKeyboard__WEBPACK_IMPORTED_MODULE_1__["drawKeyboard"])(keyboard);
  Object(_renderLetters__WEBPACK_IMPORTED_MODULE_3__["redrawLetters"])(state);
};

document.addEventListener('DOMContentLoaded', onLoad);

const getFlash = () => {
  let flash = document.createElement('div');
  flash.classList.add('flash', 'lighting');

  return flash;
};

const activateButton = code => {
  const button = document.getElementById(code);
  if (!button.classList.contains('active')) {
    button.classList.add('active', 'autoflash');
    const flash = getFlash();
    button.append(flash);
  }
};

const deactivateButton = code => {
  const button = document.getElementById(code);
  if (button.classList.contains('active')) {
    button.classList.remove('active', 'autoflash');
    button.removeChild(button.querySelector('div'));
  }
};

const normalizeShift = code => code.indexOf('Shift') !== -1 ? 'Shift' : code;

const extractCode = e => normalizeShift(e.detail ? e.detail.code : e.code);

const applyChangesToTextarea = symbol => {
  textarea.value = `${textarea.value.slice(0, state.start)}${symbol}${textarea.value.slice(state.end)}`;
};

const doSpecialAction = code => {
  let symbol = '';
  switch (code) {
    case 'Space':
      symbol = ' ';
      break;
    case 'Tab':
      symbol = '\t';
      break;
    case 'Enter':
      symbol = '\n';
      break;
    case 'Backspace':
      state.start = state.start !== state.end ? state.start : state.start - 1;
      state.start = state.start < 0 ? 0 : state.start;
      break;
    case 'Delete':
      state.end = state.start !== state.end ? state.end : state.end + 1;
      break;
    case 'ArrowLeft':
      state.start -= 1;
      state.end = state.start;
      return;
    case 'ArrowRight':
      state.start += 1;
      state.end = state.start;
      return;
    default:
      console.error('Unknown key code');
      return;
  }

  applyChangesToTextarea(symbol)
  const length = textarea.value.length;

  if (symbol) {
    state.start += 1;
    state.end = state.start;
  } else if (code === 'Backspace'){
    state.start = state.start > length ? length : state.start;
    state.end = state.start;
  } else if (code === 'Delete'){
    state.start = state.start > length ? length : state.start;
    state.end = state.start;
  }
};

const doKeyAction = code => {
  if (_config_config__WEBPACK_IMPORTED_MODULE_2__["config"][code].special) {
    doSpecialAction(code);
  } else {
    const symbol = document.querySelector(`#${code} > span`).innerText;
    if (symbol !== undefined) {
      applyChangesToTextarea(symbol);
      state.start += 1;
      state.end = state.start;
    }
  }
};

body.addEventListener('keydown', (e) => {
  const code = extractCode(e);
  e.stopPropagation();
  if (!e.metaKey) {
    e.preventDefault();
  }

  if (!Object.keys(_config_config__WEBPACK_IMPORTED_MODULE_2__["config"]).some(k => k === code)) {
    return;
  }

  if (code === 'Shift') {
    state.shift = true;
  } else if (code === 'CapsLock') {
    state.CapsLock = !state.CapsLock;
  } else if (code === 'ControlLeft') {
    state.ControlLeft = true;
  }

  activateButton(code);

  doKeyAction(code);

  Object(_renderLetters__WEBPACK_IMPORTED_MODULE_3__["redrawLetters"])(state);
});

const changeLang = code => {
  if (state.shift && state.ControlLeft &&
    (code === 'Shift' || code === 'ControlLeft')) {
    state.lang = (state.lang === _config_config__WEBPACK_IMPORTED_MODULE_2__["defaultValues"].lang ? _config_config__WEBPACK_IMPORTED_MODULE_2__["defaultValues"].altLang : _config_config__WEBPACK_IMPORTED_MODULE_2__["defaultValues"].lang);
    localStorage.setItem('lang', state.lang);
  }
};

body.addEventListener('keyup', (e) => {
  const code = extractCode(e);
  if (!Object.keys(_config_config__WEBPACK_IMPORTED_MODULE_2__["config"]).some(k => k === code)) {
    return;
  }

  changeLang(code);
  if (code === 'Shift') {
    state.shift = false;
  } else if (code === 'ControlLeft') {
    state.ControlLeft = false;
  }

  deactivateButton(code);
  Object(_renderLetters__WEBPACK_IMPORTED_MODULE_3__["redrawLetters"])(state);
});


/***/ }),

/***/ "./renderLetters.js":
/*!**************************!*\
  !*** ./renderLetters.js ***!
  \**************************/
/*! exports provided: redrawLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redrawLetters", function() { return redrawLetters; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ "./config/config.js");



const getGliffFromConfig = (value, state) => {
  let gliff;
  const rawGliff = value[state.lang];

  if (value.special) {
    gliff = rawGliff;
  } else if (Array.isArray(rawGliff)) {
    gliff = rawGliff[Number(state.shift)];
  } else {
    const upperCase = state.shift ? !state.CapsLock : state.CapsLock;
    gliff = upperCase ? rawGliff.toUpperCase() : rawGliff;
  }
  return gliff;
};

const redrawLetters = state => {
  Object.entries(_config_config__WEBPACK_IMPORTED_MODULE_0__["config"]).forEach(([key, value]) => {
      const button = document.getElementById(key);
      button.querySelector('span').innerText = getGliffFromConfig(value, state);
    }
  );
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map