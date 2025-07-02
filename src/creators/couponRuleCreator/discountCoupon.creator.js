import { CouponRuleCreator } from "./couponRule.creator.js";
import { DiscountCouponRule } from "../../entities/couponRuleEntities/discountCoupon.entity.js";

export class DiscountCouponRuleCreator extends CouponRuleCreator {
  createDiscountCouponRule() {
    return new DiscountCouponRule();
  }
}
