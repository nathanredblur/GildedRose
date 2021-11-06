import Item from "./Item";

class Conjured extends Item {
  updateQuality() {
    // degradation rate
    const degradationRate = 2;
    const quality = this.quality - degradationRate;

    this.quality = quality < 0 ? 0 : quality;
    this.sellIn -= 1;
  }
}

export default Conjured;
