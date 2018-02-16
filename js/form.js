const form = document.querySelector('.notice__form');
const mapPins = document.querySelector('.tokyo');
const adPin = document.querySelector('.pin__main');
const chAdress = form.querySelector('#address');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const typeRoom = form.querySelector('#type');
const price = form.querySelector('#price');
const capacity = form.querySelector('#capacity');
const roomNumber = form.querySelector('#room_number');
const heading = form.querySelector('#title');
const mapTopMinLimit = 100;
const mapTopMaxLimit = 560;
const mapLeftMinLimit = 0;
const mapLeftMaxLimit = mapPins.offsetWidth - adPin.offsetWidth;


chAdress.addEventListener('input', () => {
  chAdress.style.boxShadow = '0 0 4px 1px #ff6547';
  chAdress.style.outline = 'none';
  chAdress.style.border = 'none';
  let coords = chAdress.value.match(/\d+.?\d/g);
  if (!coords || coords.length < 1) {
    chAdress.reportValidity();
  } else {
    chAdress.style.boxShadow = 'none';
    adPin.style.left = checkBorderCoords(coords[0], mapLeftMinLimit, mapLeftMaxLimit) + 'px';
    adPin.style.top = checkBorderCoords(coords[1], mapTopMinLimit, mapTopMaxLimit) + 'px';
  }
});
chAdress.addEventListener('invalid', () => {
  if (chAdress.validity.patternMismatch) {
    chAdress.setCustomValidity('Обязательное поле вида [x: ###, y: ###]');
  } else {
    chAdress.setCustomValidity('');
  }
});
heading.addEventListener('input', () => {
  if (heading.value.length < 30) {
    heading.reportValidity();
  } else {
    heading.style.boxShadow = 'none';
  }
});
price.addEventListener('input', () => {
  if (price.value.length > 0) {
    price.style.boxShadow = 'none';
  }
});
timeIn.addEventListener('input', function () {
  timeOut.querySelector('[selected]').removeAttribute('selected');
  timeOut.querySelector(`[value="${this.value}"]`).setAttribute('selected', 'selected');
});
typeRoom.addEventListener('input', (e) => {
  switch (e.target.value) {
    case 'bungalo':
      price.setAttribute('min', '0');
      price.setAttribute('placeholder', '0');
      break;
    case 'flat':
      price.setAttribute('min', '1000');
      price.setAttribute('placeholder', '1000');
      break;
    case 'house':
      price.setAttribute('min', '5000');
      price.setAttribute('placeholder', '5000');
      break;
    case 'palace':
      price.setAttribute('min', '10000');
      price.setAttribute('placeholder', '10000');
      break;
  }
});
roomNumber.addEventListener('input', (e) => {
  switch (e.target.value) {
    case '1':
      capacity.querySelector('[selected]').removeAttribute('selected');
      capacity.querySelector(`[value="1"]`).setAttribute('selected', 'selected');
      break;
    case '2':
      capacity.querySelector('[selected]').removeAttribute('selected');
      capacity.querySelector(`[value="2"]`).setAttribute('selected', 'selected');
      break;
    case '3':
      capacity.querySelector('[selected]').removeAttribute('selected');
      capacity.querySelector(`[value="3"]`).setAttribute('selected', 'selected');
      break;
    case '100':
      capacity.querySelector('[selected]').removeAttribute('selected');
      capacity.querySelector(`[value="0"]`).setAttribute('selected', 'selected');
      break;
  }
});
function checkBorderCoords(top, min, max) {
  return (top < min) ? min : (top > max) ? max : top;
}


export {mapTopMinLimit, mapTopMaxLimit, mapLeftMinLimit, mapLeftMaxLimit, checkBorderCoords};

/* Изначально проверял данное поле по своим соображениям,по заданию пришлось поменять и связать с координатами пина
chAdress.addEventListener('invalid', () => {
  if (chAdress.validity.tooShort) {
    chAdress.setCustomValidity('Адрес должен состоять минимум из 11 символов[ул.#### д.#');
  } else if (chAdress.validity.tooLong) {
    chAdress.setCustomValidity('Адрес должен состоять максимум из 54 символов[ул.#### д.#');
  } else if (chAdress.validity.patternMismatch) {
    chAdress.setCustomValidity('Адрес должен быть вида [ул.#### д.#');
  } else if (chAdress.validity.valueMissing) {
    chAdress.setCustomValidity('Обязательное поле [ул.#### д.#');
  } else {
    chAdress.setCustomValidity('');
  }
});
chAdress.addEventListener('input', () => {
  if (chAdress.value.length < 11) {
    chAdress.setCustomValidity('Адрес должен состоять минимум из 11 символов[ул.#### д.#');
  } else if (chAdress.validity.patternMismatch) {
    chAdress.setCustomValidity('Адрес должен быть вида [ул.#### д.#');
  } else {
    chAdress.style.boxShadow = 'none';
    chAdress.setCustomValidity('');
  }
});
*/
