import { TaxRule } from "./taxRule.entity.js";
import regionService from "../services/region.service.js";
import CouponService from "../services/coupon.service.js";

export class CanadaTaxRule extends TaxRule {
  constructor() {
    super();
    this.tax = 0;
    this.state = "";
    this.category = "";
    this.coupon = 0;
    this.discount = 0;
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

  async isValidCoupon(coupon) {
    const cpn = await CouponService.findCouponByNameService(coupon);

    if (cpn != undefined) {
      this.coupon = cpn.percentage / 100;
    }
  }

  async calculation(price) {
    const regionCalculation = await regionService.findRegionByCscService(
      "Canada",
      this.state,
      this.category
    );

    this.discount = this.coupon * price;

    this.tax = regionCalculation.rate;

    this.finalPrice =
      parseFloat(price) +
      parseFloat(price) * parseFloat(regionCalculation.rate) -
      this.discount;
  }
}
