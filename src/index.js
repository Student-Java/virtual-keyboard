import './assets/style.css';
import { draw } from './draw';


const body = document.querySelector('body');
const content = document.createElement('section');
content.classList.add('content')
const textarea = document.createElement('textarea');
content.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.addEventListener('click', (e) => e.target.id && console.log(e.target));


const onLoad = () => {
  draw(keyboard);
  content.append(keyboard);
};


const b = document.createElement('button');
b.innerText = 'LOAD';
body.append(b, content);


// document.addEventListener("DOMContentLoaded", onLoad);
b.addEventListener('click', onLoad);
body.addEventListener('keydown', (e) => textarea.value = textarea.value + e.code + ' ');
