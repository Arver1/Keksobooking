import {getRandomNumber} from './util';
import {features} from './default_ad';


export default class Offer {
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

function CheckInError(message) {
  this.name = 'CheckInError';
  this.message = message;
}
