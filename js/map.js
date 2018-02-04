'use strict';
(function () {
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
    title[i] = item.trim();
  });
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
        if (temp.indexOf('домик') || heading.indexOf('дворец')) {
          return 'house';
        }
        if (temp.indexOf('бунгало')) {
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
    const tokyoPinMap = document.querySelector('.tokyo__pin-map');
    let tempFragment = document.createDocumentFragment();
    for (let value of ads) {
      let tempContainer = document.createElement('div');
      tempContainer.appendChild(document.createElement('img'));
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
  function CheckInError(message) {
    this.name = 'CheckInError';
    this.message = message;
  }
  function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * max - min + 1);
  }
})();

