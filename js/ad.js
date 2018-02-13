export default class Ad {
  constructor(num, offer, location) {
    this.author = {avatar: `img/avatars/user${num}.png`};
    this.offer = offer;
    this.location = location;
  }
}
