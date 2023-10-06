import * as graphql from "@nestjs/graphql";
import { SsResolverBase } from "./base/ss.resolver.base";
import { Ss } from "./base/Ss";
import { SsService } from "./ss.service";

@graphql.Resolver(() => Ss)
export class SsResolver extends SsResolverBase {
  constructor(protected readonly service: SsService) {
    super(service);
  }
}
