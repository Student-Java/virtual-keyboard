import { config } from './config/config';


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

export const redrawLetters = state => {
  Object.entries(config).forEach(([key, value]) => {
    const button = document.getElementById(key);
    button.querySelector('span').innerText = getGliffFromConfig(value, state);
  });
};
