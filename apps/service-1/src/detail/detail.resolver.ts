import * as graphql from "@nestjs/graphql";
import { DetailResolverBase } from "./base/detail.resolver.base";
import { Detail } from "./base/Detail";
import { DetailService } from "./detail.service";

@graphql.Resolver(() => Detail)
export class DetailResolver extends DetailResolverBase {
  constructor(protected readonly service: DetailService) {
    super(service);
  }
}
