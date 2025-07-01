export class TaxRuleCreator {
  createTaxRule() {}

  async calculate(state, category, price) {
    const taxRule = this.createTaxRule();

    taxRule.isValidState(state);
    taxRule.isValidCategory(category);

    await taxRule.calculation(price);

    return taxRule.tax;
  }
}
