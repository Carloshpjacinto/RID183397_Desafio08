import { CanadaTaxRuleCreator } from "../creators/canadaTaxRule.creator.js";
import { DefaultTaxRuleCreator } from "../creators/defaultTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/usaTaxRule.creator.js";

async function calculateFinalPrice(country, state, category, price, coupon) {
  const usaTax = new UsaTaxRuleCreator();
  const canadaTax = new CanadaTaxRuleCreator();
  const defaultTax = new DefaultTaxRuleCreator();

  if (country == "USA") {
    const tax = await usaTax.calculate(state, category, price, coupon);
    return parseFloat(tax.toFixed(2));
  } else if (country == "Canada") {
    const tax = await canadaTax.calculate(state, category, price, coupon);
    return parseFloat(tax.toFixed(2));
  } else {
    const tax = await defaultTax.calculate(state, category, price, coupon);
    return parseFloat(tax.toFixed(2));
  }
}

export default { calculateFinalPrice };
