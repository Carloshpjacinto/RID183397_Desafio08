import { CouponRule } from "./couponRule.entity.js";

export class DiscountCouponRule extends CouponRule {
  constructor() {
    super();
    this.discount = 0;
  }

  async isValidCoupon(code) {
    this.discount = code.percentage;
  }
}
