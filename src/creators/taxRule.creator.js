export class TaxRuleCreator {
  createTaxRule() {}

  async calculate(state, category, price, coupon) {
    const taxRule = this.createTaxRule();

    await taxRule.isValidState(state);
    await taxRule.isValidCategory(category);
    await taxRule.isValidCoupon(coupon);

    await taxRule.calculation(price);

    return taxRule;
  }
}
