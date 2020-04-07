
export class Keyboard {

  constructor() {
    this.lang = localStorage.getItem('lang') || 'eng';
    this.isLowerCase = true;
    this.initializeElements();
  }


}
