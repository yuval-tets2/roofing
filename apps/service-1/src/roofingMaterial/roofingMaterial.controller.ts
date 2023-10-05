import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoofingMaterialService } from "./roofingMaterial.service";
import { RoofingMaterialControllerBase } from "./base/roofingMaterial.controller.base";

@swagger.ApiTags("roofingMaterials")
@common.Controller("roofingMaterials")
export class RoofingMaterialController extends RoofingMaterialControllerBase {
  constructor(protected readonly service: RoofingMaterialService) {
    super(service);
  }
}
