import { TaxRuleCreator } from "./taxRule.creator.js";
import { UsaTaxRule } from "../entities/usaTaxRule.entity.js";

export class UsaTaxRuleCreator extends TaxRuleCreator {
  createTaxRule() {
    return new UsaTaxRule();
  }
}
