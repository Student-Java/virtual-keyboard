import { config, defaultValues } from '@/config/config';

export class KeyboardButton {
  constructor({id, width}) {
    this.button = document.createElement('div');
    this.button.classList.add('button');
    this.button.id = id;
    this.button.style.width = `${defaultValues.buttonWidth * width}vw`;
    this.button.style.minWidth = `${defaultValues.buttonMinWidth * width}px`;
    this.button.innerText = Array.isArray(config[id].en) ? config[id].en[0] : config[id].en;
  }

  onClick() {
    document
      .querySelector('body')
      .dispatchEvent(
        new CustomEvent(
          'keydown',
          {
            detail: {
              hazcheeseburger: true
            }
          }
        )
      )
    ;
  }
}
