import { ItemType } from './ItemFactory'

class GildedRose {
  items: Array<ItemType>;

  constructor(items = [] as Array<ItemType>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.updateQuality());
    return [...this.items];
  }

  addItem(item: ItemType) {
    this.items.push(item);
  }

  addItems(items: Array<ItemType>) {
    this.items.push(...items);
  }

  getAllItems() {
    return [...this.items];
  }

  getItemsByName(search: string) {
    const searchLower = search.toLowerCase();
    return this.items.filter((item: any) => item.name.toLowerCase().includes(searchLower));
  }

}

export default GildedRose;