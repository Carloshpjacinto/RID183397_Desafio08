import { TaxRule } from "./taxRule.entity.js";
import regionService from "../services/region.service.js";
import CouponService from "../services/coupon.service.js";

export class DefaultTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
    this.coupon = 0;
    this.discount = 0;
  }

  async isValidState(state) {
    if (state != "") {
      this.state = "";
    }
  }

  async isValidCategory(category) {
    const ct = await regionService.findCategoryService(category);

    if (ct != "") {
      this.category = "";
    }
  }

  async isValidCoupon(coupon) {
    const cpn = await CouponService.findCouponByNameService(coupon);

    if (cpn != undefined) {
      this.coupon = cpn.percentage / 100;
    }
  }

  async calculation(price) {
    const regionCalculation = await regionService.findRegionByCscService(
      "DEFAULT",
      this.state,
      this.category
    );

    this.discount = this.coupon * price;

    this.tax =
      parseFloat(price) +
      parseFloat(price) * parseFloat(regionCalculation.rate) -
      this.discount;
  }
}
