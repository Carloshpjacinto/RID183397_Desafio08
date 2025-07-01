import { CanadaTaxRuleCreator } from "../creators/canadaTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/usaTaxRule.creator.js";

async function calculateFinalPrice(country, state, category, price) {
  const usaTax = new UsaTaxRuleCreator();

  const canadaTax = new CanadaTaxRuleCreator();

  if (country == "USA") {
    const tax = await usaTax.calculate(state, category, price);
    return parseFloat(tax.toFixed(2));
  } else if (country == "Canada") {
    const tax = await canadaTax.calculate(state, category, price);
    return parseFloat(tax.toFixed(2));
  }
}

export default { calculateFinalPrice };
