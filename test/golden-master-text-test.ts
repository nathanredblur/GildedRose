import GildedRose from '@utils/GildedRose';
import itemFactory from 'src/utils/ItemFactory';

const items = [
  itemFactory({
    name: "+5 Dexterity Vest",
    sellIn: 10,
    quality: 20,
  }),
  itemFactory({
    name: "Aged Brie",
    sellIn: 2,
    quality: 0,
  }),
  itemFactory({
    name: "Elixir of the Mongoose",
    sellIn: 5,
    quality: 7,
  }),
  itemFactory({
    name: "Sulfuras, Hand of Ragnaros",
    sellIn: 0,
    quality: 80,
  }),
  itemFactory({
    name: "Sulfuras, Hand of Ragnaros",
    sellIn: -1,
    quality: 80,
  }),
  itemFactory({
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 15,
    quality: 20,
  }),
  itemFactory({
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 10,
    quality: 49,
  }),
  itemFactory({
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 5,
    quality: 49,
  }),
  // this conjured item does not work properly yet
  itemFactory({
    name: "Conjured Mana Cake",
    sellIn: 3,
    quality: 6,
  }),
];


const gildedRose = new GildedRose(items);
const days: number = 2;
for (let i = 0; i < days; i += 1) {
  console.log(`-------- day ${i} --------`);
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(`${element.name} ${element.sellIn} ${element.quality}`);

  });
  console.log();
  gildedRose.updateQuality();
}