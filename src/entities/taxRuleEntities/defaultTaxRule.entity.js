import { TaxRule } from "./taxRule.entity.js";
import regionService from "../../services/region.service.js";

export class DefaultTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
    this.finalPrice = 0;
  }

  async isValidState(state) {
    if (state != "") {
      this.state = state;
    }
  }

  async isValidCategory(category) {
    const ct = await regionService.findCategoryService(category);

    if (ct != "") {
      this.category = category;
    }
  }

  async calculation(price) {
    const regionCalculation = await regionService.findRegionByCscService(
      "DEFAULT",
      "",
      ""
    );

    this.tax = regionCalculation.rate;

    this.finalPrice =
      parseFloat(price) +
      parseFloat(price) * parseFloat(regionCalculation.rate)
  }
}
