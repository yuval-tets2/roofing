import * as graphql from "@nestjs/graphql";
import { MeasurementResolverBase } from "./base/measurement.resolver.base";
import { Measurement } from "./base/Measurement";
import { MeasurementService } from "./measurement.service";

@graphql.Resolver(() => Measurement)
export class MeasurementResolver extends MeasurementResolverBase {
  constructor(protected readonly service: MeasurementService) {
    super(service);
  }
}
