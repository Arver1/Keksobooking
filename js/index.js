import {lodgeType, ENTER_KEYCODE} from './util';
import {ads} from './default_ad';
import {dialog, openPopUp, closePopUp, closePopUpPressEsc, checkContainsPin, togglePinActive} from './pop_up';
import './form';


const dialogBtn = dialog.querySelector('.dialog__close');
const mapPins = document.querySelector('.tokyo');
const adPin = document.querySelector('.pin__main');
const mapTopMinLimit = 100;
const mapTopMaxLimit = 560;
const mapLeftMinLimit = 0;
const mapLeftMaxLimit = mapPins.offsetWidth - adPin.offsetWidth;
const fieldAdress = document.querySelector('#address');

{
  // Отрисовка первого объявления по заданию
  const dialogPanel = document.querySelector('.dialog__panel');
  const lodgeTemplate = document.querySelector('#lodge-template').content;
  const tempContainer = lodgeTemplate.cloneNode(true);
  tempContainer.querySelector('.lodge__title').textContent = ads[0].offer.title;
  tempContainer.querySelector('.lodge__price').textContent = `${ads[0].offer.price}` + '\u20BD/ночь';
  tempContainer.querySelector('.lodge__type').textContent = `${lodgeType[ads[0].offer.type]}`;
  tempContainer.querySelector('.lodge__rooms-and-guests').textContent = `Для ${ads[0].offer.guests} гостей в ${ads[0].offer.rooms} комнатах`;
  tempContainer.querySelector('.lodge__checkin-time').textContent = `Заезд после ${ads[0].offer.checkin}, выезд до ${ads[0].offer.checkout}`;
  {
    const fragment = document.createDocumentFragment();
    let temp;
    for (let item of ads[0].offer.feauters) {
      temp = document.createElement('span');
      temp.className = `feature__image feature__image--${item}`;
      fragment.appendChild(temp);
    }
    tempContainer.querySelector('.lodge__features').appendChild(fragment);
  }
  tempContainer.querySelector('.lodge__description').textContent = `${ads[0].offer.description}`;
  dialogPanel.parentElement.replaceChild(tempContainer, dialogPanel);
  document.querySelector('.dialog__title').querySelector('img').src = `${ads[0].author.avatar}`;
  document.addEventListener('keydown', closePopUpPressEsc);
}

dialogBtn.addEventListener('click', closePopUp);
dialogBtn.addEventListener('click', (e) => {
  if (e.keyCode === ENTER_KEYCODE) {
    closePopUp();
  }
});
mapPins.addEventListener('click', (e) => {
  const tempContainer = e.target.parentElement;
  if (!checkContainsPin(tempContainer)) {
    return;
  }
  togglePinActive(tempContainer);
  openPopUp(tempContainer);
});
mapPins.addEventListener('keydown', (e) => {
  if (e.keyCode === ENTER_KEYCODE) {
    const tempContainer = e.target.parentElement;
    if (!checkContainsPin(tempContainer)) {
      return;
    }
    togglePinActive(tempContainer);
    openPopUp(tempContainer);
  }
});
adPin.addEventListener('mousedown', (downEvt) => {
  downEvt.preventDefault();
  const startCoords = {
    x: downEvt.clientX,
    y: downEvt.clientY
  };
  const pin = downEvt.currentTarget;
  const onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();
    const shift = {
      x: moveEvt.clientX - startCoords.x,
      y: moveEvt.clientY - startCoords.y
    };
    let top = pin.offsetTop + shift.y;
    let left = pin.offsetLeft + shift.x;
    if (top < mapTopMinLimit) {
      top = mapTopMinLimit;
    } else if (top > mapTopMaxLimit) {
      top = mapTopMaxLimit;
    }
    if (left < mapLeftMinLimit) {
      left = mapLeftMinLimit;
    } else if (left > mapLeftMaxLimit) {
      left = mapLeftMaxLimit;
    }
    pin.style.top = top + 'px';
    pin.style.left = left + 'px';
    fieldAdress.value = `x: ${left + pin.offsetWidth / 2}, y: ${top + pin.offsetHeight}`;
    startCoords.x = moveEvt.clientX;
    startCoords.y = moveEvt.clientY;
  };
  const onMouseUp = (upEvt) => {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    adPin.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

