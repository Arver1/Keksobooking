import {tokyoPinMap as map} from './index';
const ads = [];


function renderAds(data) {
  const tempFragment = document.createDocumentFragment();
  for (let value of data) {
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
  map.appendChild(tempFragment);
  ads.push(...data);
}


export {renderAds, ads};
