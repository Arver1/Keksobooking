import {lodgeType, ESC_KEYCODE} from './util';
import {ads} from './renderAds';


const dialog = document.querySelector('.dialog');
const lodgeTemplate = document.querySelector('#lodge-template').content;
const tokyoPinMap = document.querySelector('.tokyo__pin-map');


const addPopUpInf = (container) => {
  let current;
  for (let it of ads) {
    if (it.author.avatar === container.querySelector('img').getAttribute('src')) {
      current = it;
      break;
    }
  }
  let dialogPanel = dialog.querySelector('.dialog__panel');
  const tempContainer = lodgeTemplate.cloneNode(true);
  tempContainer.querySelector('.lodge__title').textContent = current.offer.title;
  tempContainer.querySelector('.lodge__price').textContent = `${current.offer.price}` + '\u20BD/ночь';
  tempContainer.querySelector('.lodge__type').textContent = `${lodgeType[current.offer.type]}`;
  tempContainer.querySelector('.lodge__rooms-and-guests').textContent = `Для ${current.offer.guests} гостей в ${current.offer.rooms} комнатах`;
  tempContainer.querySelector('.lodge__checkin-time').textContent = `Заезд после ${current.offer.checkin}, выезд до ${current.offer.checkout}`;
  {
    const fragment = document.createDocumentFragment();
    let temp;
    for (let item of current.offer.features) {
      temp = document.createElement('span');
      temp.className = `feature__image feature__image--${item}`;
      fragment.appendChild(temp);
    }
    tempContainer.querySelector('.lodge__features').appendChild(fragment);
  }
  tempContainer.querySelector('.lodge__description').textContent = `${current.offer.description}`;
  dialogPanel.parentElement.replaceChild(tempContainer, dialogPanel);
  document.querySelector('.dialog__title').querySelector('img').src = `${current.author.avatar}`;
};
const openPopUp = (container) => {
  addPopUpInf(container);
  dialog.classList.remove('hidden');
  document.addEventListener('keydown', closePopUpPressEsc);
};
const closePopUp = () => {
  dialog.classList.add('hidden');
  tokyoPinMap.querySelector('.pin--active').classList.remove('pin--active');
  document.removeEventListener('keydown', closePopUpPressEsc);
};
const closePopUpPressEsc = (e) => {
  if (e.keyCode === ESC_KEYCODE) {
    closePopUp();
  }
};
const checkContainsPin = (container) => {
  return container.classList.contains('pin');
};
const togglePinActive = (container) => {
  const tempCheck = tokyoPinMap.querySelector('.pin--active');
  if (tempCheck) {
    tempCheck.classList.remove('pin--active');
  }
  container.classList.toggle('pin--active');
};


export {dialog, openPopUp, closePopUp, closePopUpPressEsc, checkContainsPin, togglePinActive};

