import * as graphql from "@nestjs/graphql";
import { PricingResolverBase } from "./base/pricing.resolver.base";
import { Pricing } from "./base/Pricing";
import { PricingService } from "./pricing.service";

@graphql.Resolver(() => Pricing)
export class PricingResolver extends PricingResolverBase {
  constructor(protected readonly service: PricingService) {
    super(service);
  }
}
