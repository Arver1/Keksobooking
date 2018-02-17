import {ENTER_KEYCODE, showError} from './util';
import {dialog, openPopUp, closePopUp, checkContainsPin, togglePinActive} from './pop_up';
import {mapTopMinLimit, mapTopMaxLimit, mapLeftMinLimit, mapLeftMaxLimit, checkBorderCoords} from './form';
import {load as loadAds} from './backend';
import {renderAds} from './renderAds';


const dialogBtn = dialog.querySelector('.dialog__close');
const mapPins = document.querySelector('.tokyo');
const adPin = document.querySelector('.pin__main');
const fieldAdress = document.querySelector('#address');
const URL = 'https://js.dump.academy/keksobooking/data';
const tokyoPinMap = document.querySelector('.tokyo__pin-map');


loadAds(URL, renderAds, showError);
// отрисовка первого элемента
if (adPin.nextElementSibling) {
  addPopUpInf(adPin.nextElementSibling);
}

dialogBtn.addEventListener('click', closePopUp);
dialogBtn.addEventListener('click', (e) => {
  if (e.keyCode === ENTER_KEYCODE) {
    closePopUp();
  }
});
mapPins.addEventListener('click', (e) => {
  console.log(e.target);
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
    let top = checkBorderCoords(pin.offsetTop + shift.y, mapTopMinLimit, mapTopMaxLimit);
    let left = checkBorderCoords(pin.offsetLeft + shift.x, mapLeftMinLimit, mapLeftMaxLimit);
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


export {tokyoPinMap};
