import { TaxRule } from "./taxRule.entity.js";

export class DefaultTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
    this.finalPrice = 0;
  }

  async isValidState(state) {
    this.state = state;
  }

  async isValidCategory(category) {
    this.category = category;
  }

  async calculation(price, rate) {
    this.tax = rate;

    this.finalPrice = parseFloat(price) + parseFloat(price) * parseFloat(rate);
  }
}
