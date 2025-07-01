import { CanadaTaxRuleCreator } from "../creators/canadaTaxRule.creator.js";
import { UsaTaxRuleCreator } from "../creators/usaTaxRule.creator.js";

async function finalPriceCalculation(req, res) {
  const { state, category, price } = req.query;

  const usaTax = new UsaTaxRuleCreator();

  const canadaTax = new CanadaTaxRuleCreator();

  try {
    if (state == "USA") {
      (async () => {
        const tax = await usaTax.calculate(state, category, price);

        res.send(parseFloat(tax.toFixed(2)));
      })();
    } else if (state == "Canada") {
      (async () => {
        const tax = await canadaTax.calculate(state, category, price);

        res.send(parseFloat(tax.toFixed(2)));
      })();
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default { finalPriceCalculation };
