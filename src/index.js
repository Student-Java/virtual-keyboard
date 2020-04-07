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
disclaimer.innerText = 'Left Ctrl + Shift - переключить язык';
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
        // window.clearInterval(interval);
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

const doSpecialAction = code => {
  switch (code) {
    case 'Backspace':
      state.start -= 1;
      return '';
    case 'Delete':
      state.end += 1;
      return '';
    case 'ArrowLeft':
      state.start -= 1;
      state.end -= 1;
      return;
    case 'ArrowRight':
      state.start += 1;
      state.end += 1;
      return;
  }
};

const doKeyAction = code => {
  let symbol;
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
    default:
      if (config[code].special) {
        symbol = doSpecialAction(code);
      } else {
        symbol = document.querySelector(`#${code} > span`).innerText;
      }
  }

  if (symbol !== undefined) {
    textarea.value = `${textarea.value.slice(0, state.start)}${symbol}${textarea.value.slice(state.end)}`;
    state.start += 1;
    state.end = state.start;
  }

};

body.addEventListener('keydown', (e) => {
  const code = extractCode(e);

/*
  if (!e.metaKey) {
    e.preventDefault();
  }
*/

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
