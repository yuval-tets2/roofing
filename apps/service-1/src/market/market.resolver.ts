import * as graphql from "@nestjs/graphql";
import { MarketResolverBase } from "./base/market.resolver.base";
import { Market } from "./base/Market";
import { MarketService } from "./market.service";

@graphql.Resolver(() => Market)
export class MarketResolver extends MarketResolverBase {
  constructor(protected readonly service: MarketService) {
    super(service);
  }
}
