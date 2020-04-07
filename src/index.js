import './assets/style.css';
import { drawKeyboard } from './drawKeyboard';
import { config, defaultValues } from './config/config';
import { redrawLetters } from '@/renderLetters';

const state = {
  CapsLock: false,
  shift: false,
  ControlLeft: false,
  lang: defaultValues.lang,
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
            key: config[target.id].en
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
  drawKeyboard(keyboard);
  redrawLetters(state);
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
  if (config[code].special) {
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

  if (!Object.keys(config).some(k => k === code)) {
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

  redrawLetters(state);
});

const changeLang = code => {
  if (state.shift && state.ControlLeft &&
    (code === 'Shift' || code === 'ControlLeft')) {
    state.lang = (state.lang === defaultValues.lang ? defaultValues.altLang : defaultValues.lang);
    localStorage.setItem('lang', state.lang);
  }
};

body.addEventListener('keyup', (e) => {
  const code = extractCode(e);
  if (!Object.keys(config).some(k => k === code)) {
    return;
  }

  changeLang(code);
  if (code === 'Shift') {
    state.shift = false;
  } else if (code === 'ControlLeft') {
    state.ControlLeft = false;
  }

  deactivateButton(code);
  redrawLetters(state);
});
