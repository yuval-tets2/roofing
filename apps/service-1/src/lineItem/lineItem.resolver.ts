import * as graphql from "@nestjs/graphql";
import { LineItemResolverBase } from "./base/lineItem.resolver.base";
import { LineItem } from "./base/LineItem";
import { LineItemService } from "./lineItem.service";

@graphql.Resolver(() => LineItem)
export class LineItemResolver extends LineItemResolverBase {
  constructor(protected readonly service: LineItemService) {
    super(service);
  }
}
