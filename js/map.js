'use strict';
(function () {
  const ENTER_KEYCODE = 13;
  const ESC_KEYCODE = 27;
  const title = `
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде"
  `.split(',');
  title.forEach((item, i) => {
    title[i] = item.replace(/"/g, '').trim();
  });
  const tokyoPinMap = document.querySelector('.tokyo__pin-map');
  const times = ['12:00', '13:00', '14:00'];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const ads = [];
  const tempSet = new Set();
  class Location {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  class Offer {
    constructor(heading, location, checkin, checkout) {
      this.title = heading;
      this.address = `${location.x} , ${location.y}`;
      this.price = getRandomNumber(1000, 1000000);
      this.type = (function () {
        let temp = heading.toLowerCase();
        if (~temp.indexOf('домик') || ~heading.indexOf('дворец')) {
          return 'house';
        }
        if (~temp.indexOf('бунгало')) {
          return 'bungalo';
        }
        return 'flat';
      })(heading);
      this.rooms = getRandomNumber(1, 5);
      // по заданию случайное кол-во, указано 20
      this.guests = getRandomNumber(1, 20);
      this.checkin = (function () {
        switch (checkin) {
          case '12:00' : break;
          case '13:00' : break;
          case '14:00' : break;
          default: {
            try {
              throw new CheckInError('Ошибка со временем, должно быть 12:00/13:00/14:00');
            } catch (e) {
              if (e.name === 'CheckInError') {
                console.log(e.message);
              } else {
                throw e;
              }
            }
          }
        }
        return checkin;
      })(checkin);
      this.checkout = (function () {
        switch (checkin) {
          case '12:00' : break;
          case '13:00' : break;
          case '14:00' : break;
          default: {
            try {
              throw new CheckInError('Ошибка со временем, должно быть 12:00/13:00/14:00');
            } catch (e) {
              if (e.name === 'CheckInError') {
                console.log(e.message);
              } else {
                throw e;
              }
            }
          }
        }
        return checkout;
      })(checkout);
      this.feauters = features.slice(0, getRandomNumber(1, features.length));
      this.description = '';
      this.photos = [];
    }
  }
  class Ad {
    constructor(num, offer, location) {
      this.author = {avatar: `img/avatars/user${num}.png`};
      this.offer = offer;
      this.location = location;
    }
  }
  tempSet.clear();
  while (ads.length < 8) {
    let tempNum = getRandomNumber(1, 8);
    if (!tempSet.has(tempNum)) {
      let tempLocation = new Location(getRandomNumber(300, 900), getRandomNumber(100, 500));
      ads.push(new Ad('0' + tempNum, new Offer(title[tempNum - 1], tempLocation, times[getRandomNumber(0, 2)], times[getRandomNumber(0, 2)]), tempLocation));
      tempSet.add(tempNum);
    }
  }
  tempSet.clear();
  {
    // Отрисовка сгенерированных DOM-элементов в блок .tokyo__pin-map
    const tempFragment = document.createDocumentFragment();
    for (let value of ads) {
      let tempContainer = document.createElement('div');
      let tempImg = document.createElement('img');
      tempImg.setAttribute('tabindex', '0');
      tempContainer.appendChild(tempImg);
      tempContainer.className = 'pin';
      tempContainer.children[0].className = 'rounded';
      tempContainer.children[0].setAttribute('width', 40);
      tempContainer.children[0].setAttribute('height', 40);
      tempContainer.style.left = value.location.x - tempContainer.children[0].getAttribute('width') / 2 + 'px';
      tempContainer.style.top = value.location.y - tempContainer.children[0].getAttribute('height') / 2 + 'px';
      tempContainer.children[0].src = value.author.avatar;
      tempFragment.appendChild(tempContainer);
    }
    tokyoPinMap.appendChild(tempFragment);
  }
  {
    const lodgeType = {
      bungalo: 'Бунгало',
      flat: 'Квартира',
      house: 'Дом'
    };
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
  }
  function CheckInError(message) {
    this.name = 'CheckInError';
    this.message = message;
  }
  function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  //
  // PopUp
  {
    const dialog = document.querySelector('.dialog');
    const dialogBtn = dialog.querySelector('.dialog__close');
    const lodgeType = {
      bungalo: 'Бунгало',
      flat: 'Квартира',
      house: 'Дом'
    };
    const lodgeTemplate = document.querySelector('#lodge-template').content;
    //
    //
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
        for (let item of current.offer.feauters) {
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
    dialogBtn.addEventListener('click', closePopUp);
    dialogBtn.addEventListener('click', (e) => {
      if (e.keyCode === ENTER_KEYCODE) {
        closePopUp();
      }
    });
    document.querySelector('.tokyo').addEventListener('click', (e) => {
      const tempContainer = e.target.parentElement;
      if (!checkContainsPin(tempContainer)) {
        return;
      }
      togglePinActive(tempContainer);
      openPopUp(tempContainer);
    });
    document.querySelector('.tokyo').addEventListener('keydown', (e) => {
      if (e.keyCode === ENTER_KEYCODE) {
        const tempContainer = e.target.parentElement;
        if (!checkContainsPin(tempContainer)) {
          return;
        }
        togglePinActive(tempContainer);
        openPopUp(tempContainer);
      }
    });
  }
  //
  // CheckForm
  const form = document.querySelector('.notice__form');
  const chAdress = form.querySelector('#address');
  const timeIn = form.querySelector('#timein');
  const timeOut = form.querySelector('#timeout');
  const typeRoom = form.querySelector('#type');
  const price = form.querySelector('#price');
  const capacity = form.querySelector('#capacity');
  const roomNumber = form.querySelector('#room_number');
  const heading = form.querySelector('#title');
  const sendForm = (e) => {
    if (!checkAdress()) {
      e.preventDefault();
    } else if (!checkPrice()) {
      e.preventDefault();
    } else if (!checkTitle()) {
      e.preventDefault();
    } else {
      e.currentTarget.reset();
    }
  };
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
  heading.addEventListener('input', () => {
    if (heading.value.length > 29) {
      heading.style.boxShadow = 'none';
    }
  });
  price.addEventListener('input', () => {
    if (price.value.length > 0) {
      price.style.boxShadow = 'none';
    }
  });
  timeIn.addEventListener('blur', function () {
    timeOut.querySelector('[selected]').removeAttribute('selected');
    timeOut.querySelector(`[value="${this.value}"]`).setAttribute('selected', 'selected');
  });
  typeRoom.addEventListener('blur', (e) => {
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
  roomNumber.addEventListener('blur', (e) => {
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
  form.addEventListener('submit', sendForm);
})();

