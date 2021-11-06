import Item from "./Item";

class Event extends Item {
  updateQuality() {
    let qualityRate = 1;

    // Quality increases by 2 when there are 10 days or less
    if (this.sellIn <= 10) qualityRate = 2;

    // Quality increases by 3 when there are 5 days or less
    if (this.sellIn <= 5) qualityRate = 3;

    // Quality drops to 0 after the sell date
    if (this.sellIn <= 0) {
      this.quality = 0
    } else {
      this.quality += qualityRate;
    }

    this.sellIn -= 1;
  }
}

export default Event;