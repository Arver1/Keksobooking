export const ENTER_KEYCODE = 13;
export const ESC_KEYCODE = 27;
export const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
export const lodgeType = {
  bungalo: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом'
};

export function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
export function showError(message) {
  let node = document.createElement('div');
  node.classList.add('errorMessage');
  node.style.zIndex = '200';
  node.style.margin = '0 auto';
  node.style.backgroundColor = 'red';
  node.style.textAlign = 'center';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';
  document.body.insertAdjacentElement('afterBegin', node);
  node.textContent = message;
  setTimeout(function () {
    document.querySelector('.errorMessage').remove();
  }, 5000);
}
