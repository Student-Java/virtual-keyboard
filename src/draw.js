import { config, defaultValues, layout } from './config/config';


export const draw = (parentElement) => {
  parentElement.innerHTML = '';
  for (const layoutGroup of layout) {
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

const onClick = (e) => {
  console.log(e.currentTarget);
}
