import Ad from './ad';
import Offer from './offer';
import Location from './location';
import {getRandomNumber} from '../js/util';


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
const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ads = [];
const tempSet = new Set();
const tokyoPinMap = document.querySelector('.tokyo__pin-map');


// По заданию генерируем 8 неповторяющихся объявлений
//
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


export {ads, features};
