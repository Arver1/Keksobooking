import {showPinCard} from './pop_up';
import {filterAds} from './filter';


const ads = [];
const adPin = document.querySelector('.pin__main');
const tokyoPinMap = document.querySelector('.tokyo__pin-map');


function renderAds(data) {
  const tempFragment = document.createDocumentFragment();
  for (let value of filterAds(data)) {
    let tempContainer = document.createElement('div');
    let tempImg = document.createElement('img');
    tempImg.setAttribute('tabindex', '0');
    tempContainer.appendChild(tempImg);
    tempContainer.className = 'pin ad';
    tempContainer.children[0].className = 'rounded';
    tempContainer.children[0].setAttribute('width', 40);
    tempContainer.children[0].setAttribute('height', 40);
    tempContainer.style.left = value.location.x - tempContainer.children[0].getAttribute('width') / 2 + 'px';
    tempContainer.style.top = value.location.y - tempContainer.children[0].getAttribute('height') / 2 + 'px';
    tempContainer.children[0].src = value.author.avatar;
    tempFragment.appendChild(tempContainer);
  }
  tokyoPinMap.appendChild(tempFragment);
  ads.push(...data);
  if (adPin.nextElementSibling) {
    showPinCard(adPin.nextElementSibling.querySelector('.rounded'));
  }
}


export {renderAds, ads};
