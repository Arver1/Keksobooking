import {renderAds, ads} from './renderAds';
const filters = document.querySelector('.tokyo__filters');
const houseType = document.querySelector('#housing_type');
const priceType = document.querySelector('#housing_price');
const roomNumberType = document.querySelector('#housing_room-number');
const guestNumberType = document.querySelector('#housing_guests-number');
const map = document.querySelector('.tokyo__pin-map');

const filterAds = (data)=> {
  return data.filter((item) => {
    return checkHouseType(item);// && checkPriceType(item) && checkRoomNumberType(item) && checkGuestNumberType(item);
  });
};
const checkHouseType = item => {
  const temp = houseType[houseType.selectedIndex].value;
  if (temp === 'any') {
    return true;
  }
  return item.offer.type === houseType[houseType.selectedIndex].value;
};
/*
const checkPriceType = item => {
  const temp = priceType[priceType.selectedIndex].value;
  if (temp === 'any') {
    return true;
  }
  const range = priceType[priceType.selectedIndex].value.match(/\d+/g);
  if (range === 1) {
    return item.offer.price
  }
};
*/
filters.addEventListener('change', (e) => {
  for (let it of document.querySelectorAll('.ad')) {
    map.removeChild(it);
  }
  renderAds(ads);
});


export {filterAds};
