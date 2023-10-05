import * as graphql from "@nestjs/graphql";
import { OfficeLocationResolverBase } from "./base/officeLocation.resolver.base";
import { OfficeLocation } from "./base/OfficeLocation";
import { OfficeLocationService } from "./officeLocation.service";

@graphql.Resolver(() => OfficeLocation)
export class OfficeLocationResolver extends OfficeLocationResolverBase {
  constructor(protected readonly service: OfficeLocationService) {
    super(service);
  }
}
