import { DiscountCouponRuleCreator } from "../creators/CouponRuleCreator/discountCoupon.creator.js";
import { CanadaTaxRuleCreator } from "../creators/TaxRuleCreator/canadaTaxRule.creator.js";
import { DefaultTaxRuleCreator } from "../creators/TaxRuleCreator/defaultTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/TaxRuleCreator/usaTaxRule.creator.js";

async function calculateFinalPrice(country, state, category, price, coupon) {
  const usaTax = new UsaTaxRuleCreator();
  const canadaTax = new CanadaTaxRuleCreator();
  const defaultTax = new DefaultTaxRuleCreator();
  const couponInfo = new DiscountCouponRuleCreator();

  const report = {
    country,
    state,
    category,
    price,
    coupon,
  };

  let saleInfo;

  const discountCoupon = await couponInfo.getDiscountCoupon(coupon);

  if (country == "USA") {
    saleInfo = await usaTax.calculate(state, category, price);
  } else if (country == "Canada") {
    saleInfo = await canadaTax.calculate(state, category, price);
  } else {
    saleInfo = await defaultTax.calculate(state, category, price);
  }

  const { tax, finalPrice } = saleInfo;

  const { discount } = discountCoupon;

  report.tax = parseFloat(tax.toFixed(2));
  report.discount = parseFloat(discount.toFixed(2));
  const discountCalculation = finalPrice - discount;
  report.finalPrice = parseFloat(discountCalculation.toFixed(2));

  return report;
}

export default { calculateFinalPrice };
