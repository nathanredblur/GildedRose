import Aged from './items/Aged';
import Legendary from './items/Legendary';
import Event from './items/Event';
import RegularItem from './items/RegularItem';
import Conjured from './items/Conjured';

export type ItemProps = {
  name: string;

  /** Denotes the number of days we have to sell the item */
  sellIn?: number;

  /** Denotes how valuable the item is */
  quality?: number;
}

export type ItemType = RegularItem | Legendary | Event | Conjured

const isLegendary = (item: ItemProps) => item.name.includes('Sulfuras');
const isAged = (item: ItemProps) => item.name.includes('Aged');
const isEvent = (item: ItemProps) => item.name.includes('Backstage passes');
const isConjured = (item: ItemProps) => item.name.includes('Conjured');


export const itemFactory = (item: ItemProps) => {
  const { name, sellIn = 10, quality = 20 } = item;

  if (isAged(item)) return new Aged(name, sellIn, quality);
  if (isLegendary(item)) return new Legendary(name, sellIn, quality);
  if (isEvent(item)) return new Event(name, sellIn, quality);
  if (isConjured(item)) return new Conjured(name, sellIn, quality);

  return new RegularItem(name, sellIn, quality)
}

export const itemsFactory = (items: ItemProps[]) => items.map(itemFactory);