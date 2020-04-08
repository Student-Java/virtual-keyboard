import { defaultValues, layout } from './config/config';


const createButton = ({ id, width }) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button');
  buttonContainer.id = id;
  buttonContainer.style.width = `${defaultValues.buttonWidth * width}vw`;
  buttonContainer.style.minWidth = `${defaultValues.buttonMinWidth * width}px`;
  buttonContainer.append(document.createElement('span'));
  return buttonContainer;
};

export const drawKeyboard = parentElement => {
  layout.forEach(layoutGroup => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.append(
      ...layoutGroup
        .map(el => Array.isArray(el)
          ? { id: el[0], width: el[1] }
          : { id: el, width: 1 })
        .map(createButton)
    );

    parentElement.append(rowDiv);
  });
};
