import Item from '@utils/Item';
import GildedRose from '@utils/GildedRose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
