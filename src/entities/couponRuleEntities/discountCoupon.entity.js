import { CouponRule } from "./couponRule.entity.js";
import CouponService from "../../services/coupon.service.js";

export class DiscountCouponRule extends CouponRule {
  constructor() {
    super();
    this.discount = 0;
  }

  async isValidCoupon(code) {
    const coupon = await CouponService.findCouponByNameService(code);

    if (coupon != undefined) {
      this.discount = coupon.percentage;
    }
  }
}
