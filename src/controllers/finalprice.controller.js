import { UsaTaxRuleCreator } from "../creators/usaTaxRule.creator.js";

async function finalPriceCalculation(req, res) {
  const { state, category, price } = req.query;

  const creator = new UsaTaxRuleCreator();

  try {
    (async () => {
      const tax = await creator.calculate(state, category, price);

      res.send(parseFloat(tax.toFixed(2)));
    })();
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default { finalPriceCalculation };
