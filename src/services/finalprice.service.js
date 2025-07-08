import { DiscountCouponRuleCreator } from "../creators/couponRuleCreator/discountCoupon.creator.js";
import { CanadaTaxRuleCreator } from "../creators/TaxRuleCreator/canadaTaxRule.creator.js";
import { DefaultTaxRuleCreator } from "../creators/TaxRuleCreator/defaultTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/TaxRuleCreator/usaTaxRule.creator.js";
import couponService from "./coupon.service.js";
import regionService from "./region.service.js";

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
  let regionCalculation;

  const cp = await couponService.findCouponByNameService(coupon);

  const discountCoupon = await couponInfo.getDiscountCoupon(cp);

  if (country == "USA") {
    regionCalculation = await regionService.findRegionByCscService(
      "USA",
      state,
      category
    );
    saleInfo = await usaTax.calculate(
      regionCalculation.state,
      regionCalculation.category,
      price,
      regionCalculation.rate
    );
  } else if (country == "Canada") {
    regionCalculation = await regionService.findRegionByCscService(
      "Canada",
      state,
      category
    );
    saleInfo = await canadaTax.calculate(
      regionCalculation.state,
      regionCalculation.category,
      price,
      regionCalculation.rate
    );
  } else {
    regionCalculation = await regionService.findRegionByCscService(
      "DEFAULT",
      "",
      ""
    );
    saleInfo = await defaultTax.calculate(
      regionCalculation.state,
      regionCalculation.category,
      price,
      regionCalculation.rate
    );
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
