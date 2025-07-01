import { TaxRule } from "./taxRule.entity.js";
import regionService from "../services/region.service.js";

export class CanadaTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
  }

  async isValidState(state) {
    const st = await regionService.findRegionByStateService(state);

    if (st) this.state = st.state;
  }

  async isValidCategory(category) {
    const ct = await regionService.findCategoryService(category);

    if (ct) this.category = ct.category;
  }

  async calculation(price) {
    const regionCalculation = await regionService.findRegionByCscService(
      "Canada",
      this.state,
      this.category
    );

    this.tax =
      parseFloat(price) +
      parseFloat(price) * parseFloat(regionCalculation.rate);
  }
}
