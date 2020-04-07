!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {i: r, l: !1, exports: {}};
    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
  }, n.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) for (var a in e) n.d(r, a, function (t) {
      return e[t]
    }.bind(null, a));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, 'a', t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = '', n(n.s = 0)
}([function (e, t, n) {
  e.exports = n(2)
}, function (e, t, n) {
}, function (e, t, n) {
  'use strict';
  n.r(t);
  n(1);
  const r = {
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
      Space: {en: ' ', ru: ' ', special: !0},
      AltLeft: {en: 'Alt', ru: 'Alt', special: !0},
      AltRight: {en: 'Alt', ru: 'Alt', special: !0},
      ArrowDown: {en: '∨', ru: '∨', special: !0},
      ArrowLeft: {en: '<', ru: '<', special: !0},
      ArrowRight: {en: '>', ru: '>', special: !0},
      ArrowUp: {en: '∧', ru: '∧', special: !0},
      Backspace: {en: 'Backspace', ru: 'Backspace', special: !0},
      CapsLock: {en: 'Caps Lock', ru: 'Caps Lock', special: !0},
      ControlLeft: {en: 'Ctrl', ru: 'Ctrl', special: !0},
      ControlRight: {en: 'Ctrl', ru: 'Ctrl', special: !0},
      Delete: {en: 'DEL', ru: 'DEL', special: !0},
      Enter: {en: 'Enter', ru: 'Enter', special: !0},
      MetaLeft: {en: 'Win', ru: 'Win', special: !0},
      Shift: {en: 'Shift', ru: 'Shift', special: !0},
      Tab: {en: 'Tab', ru: 'Tab', special: !0}
    },
    a = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', ['Backspace', 2]], [['Tab', 2], 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'], [['CapsLock', 2], 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', ['Enter', 2]], [['Shift', 2], 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Delete'], [['ControlLeft', 2], ['MetaLeft', 1.5], ['AltLeft', 1.5], ['Space', 3.35], ['AltRight', 1.5], ['ControlRight', 1.5], 'ArrowLeft', 'ArrowDown', 'ArrowRight']],
    i = 10, s = 4, o = 'en', c = 'ru', u = ({id: e, width: t}) => {
      const n = document.createElement('div');
      return n.classList.add('button'), n.id = e, n.style.width = `${s * t}vw`, n.style.minWidth = `${i * t}px`, n.append(document.createElement('span')), n
    }, l = e => {
      Object.entries(r).forEach(([t, n]) => {
        document.getElementById(t).querySelector('span').innerText = ((e, t) => {
          let n;
          const r = e[t.lang];
          if (e.special) n = r; else if (Array.isArray(r)) n = r[Number(t.shift)]; else {
            n = (t.shift ? !t.CapsLock : t.CapsLock) ? r.toUpperCase() : r
          }
          return n
        })(n, e)
      })
    }, d = {CapsLock: !1, shift: !1, ControlLeft: !1, lang: o, start: 0, end: 0}, p = document.querySelector('body'),
    y = document.createElement('section');
  y.classList.add('content'), p.append(y);
  const f = document.createElement('textarea');
  y.append(f);
  const g = document.createElement('div');
  g.classList.add('keyboard'), y.append(g);
  const m = document.createElement('div');
  m.classList.add('disclaimer'), m.innerHTML = 'Left Ctrl + Shift - переключить язык<br>собранный проект в gh-pages. Огромная просьба оставлять развернутый комментарий и свой ник, спасибо!';
  const K = window.localStorage;
  K.getItem('lang') && (d.lang = K.getItem('lang')), y.append(m), 'click'.split(' ').forEach(e => f.addEventListener(e, e => {
    d.start = e.target.selectionStart, d.end = e.target.selectionEnd
  }));
  const L = (e, t) => {
    document.querySelector('body').dispatchEvent(new CustomEvent(t, {detail: {code: e.id, key: r[e.id].en}}))
  };
  g.addEventListener('mousedown', e => {
    const t = 'SPAN' === e.target.tagName ? e.target.parentElement : e.target;
    t.id && (L(t, 'keydown'), t.addEventListener('mouseup', () => {
      L(t, 'keyup')
    }, !1))
  });
  document.addEventListener('DOMContentLoaded', () => {
    var e;
    e = g, a.forEach(t => {
      const n = document.createElement('div');
      n.classList.add('row'), n.append(...t.map(e => Array.isArray(e) ? {id: e[0], width: e[1]} : {id: e, width: 1}).map(u)), e.append(n)
    }), l(d)
  });
  const h = e => {
    const t = document.getElementById(e);
    if (!t.classList.contains('active')) {
      t.classList.add('active', 'autoflash');
      const e = (() => {
        let e = document.createElement('div');
        return e.classList.add('flash', 'lighting'), e
      })();
      t.append(e)
    }
  }, v = e => {
    return -1 !== (t = e.detail ? e.detail.code : e.code).indexOf('Shift') ? 'Shift' : t;
    var t
  }, k = e => {
    f.value = `${f.value.slice(0, d.start)}${e}${f.value.slice(d.end)}`
  }, E = e => {
    if (r[e].special) (e => {
      let t = '';
      switch (e) {
        case'Space':
          t = ' ';
          break;
        case'Tab':
          t = '\t';
          break;
        case'Enter':
          t = '\n';
          break;
        case'Backspace':
          d.start = d.start !== d.end ? d.start : d.start - 1, d.start = d.start < 0 ? 0 : d.start;
          break;
        case'Delete':
          d.end = d.start !== d.end ? d.end : d.end + 1;
          break;
        case'ArrowLeft':
          return d.start -= 1, void (d.end = d.start);
        case'ArrowRight':
          return d.start += 1, void (d.end = d.start);
        default:
          return
      }
      k(t);
      const n = f.value.length;
      t ? (d.start += 1, d.end = d.start) : ('Backspace' === e || 'Delete' === e) && (d.start = d.start > n ? n : d.start, d.end = d.start)
    })(e); else {
      const t = document.querySelector(`#${e} > span`).innerText;
      void 0 !== t && (k(t), d.start += 1, d.end = d.start)
    }
  };
  p.addEventListener('keydown', e => {
    const t = v(e);
    e.stopPropagation(), e.metaKey || e.preventDefault(), Object.keys(r).some(e => e === t) && ('Shift' === t ? d.shift = !0 : 'CapsLock' === t ? d.CapsLock = !d.CapsLock : 'ControlLeft' === t && (d.ControlLeft = !0), h(t), E(t), l(d))
  });
  p.addEventListener('keyup', e => {
    const t = v(e);
    Object.keys(r).some(e => e === t) && ((e => {
      d.shift && d.ControlLeft && ('Shift' === e || 'ControlLeft' === e) && (d.lang = d.lang === o ? c : o, K.setItem('lang', d.lang))
    })(t), 'Shift' === t ? d.shift = !1 : 'ControlLeft' === t && (d.ControlLeft = !1), (e => {
      const t = document.getElementById(e);
      t.classList.contains('active') && (t.classList.remove('active', 'autoflash'), t.removeChild(t.querySelector('div')))
    })(t), l(d))
  })
}]);
