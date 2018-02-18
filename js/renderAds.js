import {showPinCard} from './pop_up';
import {filterAds} from './filter';


const ads = [];
const adPin = document.querySelector('.pin__main');
const tokyoPinMap = document.querySelector('.tokyo__pin-map');


function saveAds(data) {
  ads.push(...data);
  renderAds(ads);
}
function renderAds(data) {
  const tempFragment = document.createDocumentFragment();
  const tempData = filterAds(data);
  for (let value of tempData) {
    let tempContainer = document.createElement('div');
    let tempImg = document.createElement('img');
    tempImg.setAttribute('tabindex', '0');
    tempContainer.appendChild(tempImg);
    tempContainer.className = 'pin ad';
    tempContainer.children[0].className = 'rounded';
    tempContainer.children[0].setAttribute('width', 40);
    tempContainer.children[0].setAttribute('height', 40);
    tempContainer.children[0].setAttribute('title', value.offer.title);
    tempContainer.style.left = value.location.x - tempContainer.children[0].getAttribute('width') / 2 + 'px';
    tempContainer.style.top = value.location.y - tempContainer.children[0].getAttribute('height') / 2 + 'px';
    tempContainer.children[0].src = value.author.avatar;
    tempFragment.appendChild(tempContainer);
  }
  tokyoPinMap.appendChild(tempFragment);
  if (adPin.nextElementSibling) {
    showPinCard(adPin.nextElementSibling.querySelector('.rounded'));
  }
}


export {saveAds, renderAds, ads};
