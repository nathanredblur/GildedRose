/* eslint-disable max-classes-per-file */
class Item {
  name: string;

  /** Denotes the number of days we have to sell the item */
  sellIn: number;

  /** Denotes how valuable the item is */
  quality: number;

  constructor(
    name: string,
    sellIn: number,
    quality: number
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export default Item;