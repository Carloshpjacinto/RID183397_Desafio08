import { CanadaTaxRuleCreator } from "../creators/canadaTaxRule.creator.js";
import { DefaultTaxRuleCreator } from "../creators/defaultTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/usaTaxRule.creator.js";

async function calculateFinalPrice(country, state, category, price, coupon) {
  const usaTax = new UsaTaxRuleCreator();
  const canadaTax = new CanadaTaxRuleCreator();
  const defaultTax = new DefaultTaxRuleCreator();

  const report = {
    country,
    state,
    category,
    price,
    coupon,
  };

  let taxInfo;

  if (country == "USA") {
    taxInfo = await usaTax.calculate(state, category, price, coupon);
  } else if (country == "Canada") {
    taxInfo = await canadaTax.calculate(state, category, price, coupon);
  } else {
    taxInfo = await defaultTax.calculate(state, category, price, coupon);
  }

  const { tax, discount, finalPrice } = taxInfo;

  report.tax = parseFloat(tax.toFixed(2));
  report.discount = parseFloat(discount.toFixed(2));
  report.finalPrice = parseFloat(finalPrice.toFixed(2));

  return report
}

export default { calculateFinalPrice };
