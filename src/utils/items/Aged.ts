import Item from "./Item";

class RegularItem extends Item {
  updateQuality() {
    const qualityRate = this.sellIn <= 0 ? 2 : 1;;
    const quality = this.quality + qualityRate;

    if (this.quality < 50) this.quality = quality;
    this.sellIn -= 1;
  }
}

export default RegularItem;