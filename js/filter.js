import {renderAds, ads} from './renderAds';


const filters = document.querySelector('.tokyo__filters');
const houseType = document.querySelector('#housing_type');
const priceType = document.querySelector('#housing_price');
const roomNumberType = document.querySelector('#housing_room-number');
const guestNumberType = document.querySelector('#housing_guests-number');
const map = document.querySelector('.tokyo__pin-map');


const filterAds = (data)=> {
  let tempData = data.filter((item) => {
    return checkHouseType(item) && checkPriceType(item);// && checkRoomNumberType(item) && checkGuestNumberType(item);
  });
  return tempData.length > 5 ? tempData.slice(0, 5) : tempData;
};
const checkHouseType = item => {
  const temp = houseType[houseType.selectedIndex].value;
  if (temp === 'any') {
    return true;
  }
  return item.offer.type === houseType[houseType.selectedIndex].value;
};
const checkPriceType = item => {
  let flag = false;
  let range = priceType[priceType.selectedIndex].textContent.match(/\d+/g);
  switch (priceType[priceType.selectedIndex].value) {
    case 'any' :
      flag = true;
      break;
    case 'middle' :
      if (range[0] > range[1]) {
        range = range.reverse();
      }
      if (item.offer.price >= range[0] && item.offer.price <= range[1]) {
        flag = true;
      }
      break;
    case 'low' :
      if (item.offer.price < range) {
        flag = true;
      }
      break;
    case 'high' :
      if (item.offer.price > range) {
        flag = true;
      }
      break;
  }
  return flag;
};
filters.addEventListener('change', () => {
  for (let it of document.querySelectorAll('.ad')) {
    map.removeChild(it);
  }
  renderAds(ads);
});


export {filterAds};
