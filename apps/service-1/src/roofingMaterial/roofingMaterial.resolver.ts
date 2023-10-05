import * as graphql from "@nestjs/graphql";
import { RoofingMaterialResolverBase } from "./base/roofingMaterial.resolver.base";
import { RoofingMaterial } from "./base/RoofingMaterial";
import { RoofingMaterialService } from "./roofingMaterial.service";

@graphql.Resolver(() => RoofingMaterial)
export class RoofingMaterialResolver extends RoofingMaterialResolverBase {
  constructor(protected readonly service: RoofingMaterialService) {
    super(service);
  }
}
