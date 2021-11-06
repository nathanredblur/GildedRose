import GildedRose from '@utils/GildedRose';
import itemFactory, { ItemType } from './ItemFactory';

const createGildedRose = (items: ItemType[] = []) => new GildedRose(items);

const genericItem = {
  name: "+5 Dexterity Vest",
  sellIn: 10,
  quality: 20,
}

const agedItem = {
  name: "Aged Brie",
  sellIn: 2,
  quality: 0,
}

const legendaryItem = {
  name: "Sulfuras, Hand of Ragnaros",
  sellIn: 0,
  quality: 80,
}

const eventItem = {
  name: "Backstage passes to a TAFKAL80ETC concert",
  sellIn: 15,
  quality: 20,
}

const conjuredItem = {
  name: "Conjured Mana Cake",
  sellIn: 3,
  quality: 6,
}


describe('Gilded Rose', () => {
  it('should has items', () => {
    const gildedRose = createGildedRose([
      itemFactory(genericItem),
    ]);

    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
  });

  it('should reduce quality of regular items by one if sellIn is higher than 0', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...genericItem,
        sellIn: 2,
        quality: 5,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should reduce quality of regular items by two if sellIn is lower or equal than 0', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...genericItem,
        sellIn: 0,
        quality: 5,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  it('should not reduce quality less than 0', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...genericItem,
        sellIn: 1,
        quality: 0,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should increase quality of "Aged Brie" if sellIn is reduce', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...agedItem,
        sellIn: 2,
        quality: 2,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it('should increase quality of "Aged Brie" by two if sellIn is less or equal than 0', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...agedItem,
        sellIn: 0,
        quality: 2,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('should never increase quality of "Aged Brie" if quality is more than 50', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...agedItem,
        sellIn: 1,
        quality: 49,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);

    // even if sellIn is less or equal than 0
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('should never change quality or sellIn of "Sulfuras..."', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...legendaryItem,
        sellIn: 2,
        quality: 5,
      }),

      itemFactory({
        ...legendaryItem,
        sellIn: 0,
        quality: 5,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(2);

    items = gildedRose.updateQuality();
    expect(items[1].quality).toBe(5);
    expect(items[1].sellIn).toBe(0);
  });


  it('should increase quality of "Backstage passes..." by one if sellIn is higher than 10', () => {
    let items: ItemType[];

    const gildedRose = createGildedRose([
      itemFactory({
        ...eventItem,
        sellIn: 12,
        quality: 1,
      }),
    ]);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should increase quality of "Backstage passes..." by two if sellIn is less or equal than 10 and higher than 5', () => {
    let items = [
      itemFactory({
        ...eventItem,
        sellIn: 10,
        quality: 0,
      }),
    ];

    const gildedRose = createGildedRose(items);

    while (items[0].sellIn > 5) {
      const quality = items[0].quality + 2;
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(quality);
    }
  });

  it('should increase quality of "Backstage passes..." by 3 if sellIn is less or equal than 5 and higher than 0', () => {
    let items = [
      itemFactory({
        ...eventItem,
        sellIn: 5,
        quality: 0,
      }),
    ];

    const gildedRose = createGildedRose(items);

    while (items[0].sellIn > 0) {
      const quality = items[0].quality + 3;
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(quality);
    }
  });

  it('should set quality of "Backstage passes..." to 0 if sellIn is less or equal than 0', () => {
    let items = [
      itemFactory({
        ...eventItem,
        sellIn: 0,
        quality: 5,
      }),
    ];

    const gildedRose = createGildedRose(items);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should reduce quality of "Conjured..." items by two', () => {
    let items = [
      itemFactory({
        ...conjuredItem,
        sellIn: 1,
        quality: 6,
      }),
    ];

    const gildedRose = createGildedRose(items);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should not reduce quality less than 0 for "Conjured..." items', () => {
    let items = [
      itemFactory({
        ...conjuredItem,
        sellIn: 1,
        quality: 1,
      }),
    ];

    const gildedRose = createGildedRose(items);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);

    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

