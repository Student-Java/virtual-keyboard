import './assets/style.css';
import { drawKeyboard } from './drawKeyboard';
import { config, defaultValues } from './config/config';
import { redrawLetters } from '@/renderLetters';

const state = {
  CapsLock: false,
  shift: false,
  ControlLeft: false,
  lang: defaultValues.lang
}

const body = document.querySelector('body');
const content = document.createElement('section');
content.classList.add('content')
body.append(content);
const textarea = document.createElement('textarea');
content.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');


function fireKeyEvent(id, eventName) {
  document
    .querySelector('body')
    .dispatchEvent(
      new CustomEvent(
        eventName,
        {
          detail: {
            code: id,
            key: config[id].en
          }
        }
      )
    );
}

keyboard.addEventListener('mousedown', (e) => {
  const target = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
  if (target.id) {
    const interval = window.setInterval(() => fireKeyEvent(target.id, 'keydown'), 30);
    target.addEventListener(
      'mouseup',
      () => {
        window.clearInterval(interval);
        fireKeyEvent(target.id, 'keyup');
      },
      false
    );
  }
});

const onLoad = () => {
  content.append(keyboard);
  drawKeyboard(keyboard);
  redrawLetters(state);
};

document.addEventListener('DOMContentLoaded', onLoad);

const getFlash = () => {
  let flash = document.createElement('div');
  flash.classList.add('flash', 'lighting');
  // flash.style = 'height: 60px;width: 40px;top: 0;left: -140px;'

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

body.addEventListener('keydown', (e) => {
    const code = extractCode(e);

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

    textarea.value = textarea.value + code + ' ';

    redrawLetters(state);
  }
);

const changeLang = code => {
  if (state.shift && state.ControlLeft && (code === 'Shift' || code === 'ControlLeft')) {
    state.lang = (state.lang === defaultValues.lang ? defaultValues.altLang : defaultValues.lang);
  }
};

body.addEventListener('keyup', (e) => {
    console.log(e);
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
  }
);
