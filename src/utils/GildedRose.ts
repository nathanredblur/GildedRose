import { ItemType } from './ItemFactory'

class GildedRose {
  items: Array<ItemType>;

  constructor(items = [] as Array<ItemType>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.updateQuality());
    return this.items;
  }
}

export default GildedRose;