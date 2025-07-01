export class TaxRuleCreator {
  createTaxRule() {}

  async calculate(state, category, price) {
    const taxRule = this.createTaxRule();

    await taxRule.isValidState(state);
    await taxRule.isValidCategory(category);

    await taxRule.calculation(price);

    return taxRule.tax;
  }
}
