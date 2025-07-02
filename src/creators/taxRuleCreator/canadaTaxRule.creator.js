import { TaxRuleCreator } from "./taxRule.creator.js"; 
import { CanadaTaxRule } from "../../entities/taxRuleEntities/canadaTaxRule.entity.js"; 

export class CanadaTaxRuleCreator extends TaxRuleCreator {
  createTaxRule() {
    return new CanadaTaxRule();
  }
}
