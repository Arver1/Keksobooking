export const ENTER_KEYCODE = 13;
export const ESC_KEYCODE = 27;
export const lodgeType = {
  bungalo: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом'
};

export function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

