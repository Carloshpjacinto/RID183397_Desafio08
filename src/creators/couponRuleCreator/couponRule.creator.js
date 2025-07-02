export class CouponRuleCreator {
  createDiscountCouponRule() {}

  async getDiscountCoupon(code) {
    const couponRule = this.createDiscountCouponRule();

    await couponRule.isValidCoupon(code)

    return couponRule;
  }
}
