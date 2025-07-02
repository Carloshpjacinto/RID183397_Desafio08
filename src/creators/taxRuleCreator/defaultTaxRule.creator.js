import { TaxRuleCreator } from "./taxRule.creator.js"; 
import { DefaultTaxRule } from "../../entities/taxRuleEntities/defaultTaxRule.entity.js";

export class DefaultTaxRuleCreator extends TaxRuleCreator {
  createTaxRule() {
    return new DefaultTaxRule();
  }
}
