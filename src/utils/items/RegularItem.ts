import Item from "./Item";

class RegularItem extends Item {
  updateQuality() {
    // degradation rate
    const degradationRate = this.sellIn <= 0 ? 2 : 1;
    const quality = this.quality - degradationRate;

    this.quality = quality < 0 ? 0 : quality;
    this.sellIn -= 1;
  }
}

export default RegularItem;