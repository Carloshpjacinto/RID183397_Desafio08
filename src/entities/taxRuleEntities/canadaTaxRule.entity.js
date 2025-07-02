import { TaxRule } from "./taxRule.entity.js";
import regionService from "../../services/region.service.js";

export class CanadaTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
    this.finalPrice = 0;
  }

  async isValidState(state) {
    const st = await regionService.findRegionByStateService(state);

    if (st != undefined) {
      this.state = st.state;
    }
  }

  async isValidCategory(category) {
    const ct = await regionService.findCategoryService(category);

    if (ct != undefined) {
      this.category = ct.category;
    }
  }

  async calculation(price) {
    const regionCalculation = await regionService.findRegionByCscService(
      "Canada",
      this.state,
      this.category
    );

    this.tax = regionCalculation.rate;

    this.finalPrice =
      parseFloat(price) +
      parseFloat(price) * parseFloat(regionCalculation.rate)
  }
}
