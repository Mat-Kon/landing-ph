export const hiddenBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const viewBodyScroll = () => {
  document.body.style.overflow = 'unset';
};

// export const createCustomElem = (elemTag: keyof HTMLElementTagNameMap, classNames: string[]) => {
//   const elem = document.createElement(elemTag);
//   const className = classNames.join(' ');
//   elem.className = className;

//   return elem;
// }