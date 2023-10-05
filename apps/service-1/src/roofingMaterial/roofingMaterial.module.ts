import { Module } from "@nestjs/common";
import { RoofingMaterialModuleBase } from "./base/roofingMaterial.module.base";
import { RoofingMaterialService } from "./roofingMaterial.service";
import { RoofingMaterialController } from "./roofingMaterial.controller";
import { RoofingMaterialResolver } from "./roofingMaterial.resolver";

@Module({
  imports: [RoofingMaterialModuleBase],
  controllers: [RoofingMaterialController],
  providers: [RoofingMaterialService, RoofingMaterialResolver],
  exports: [RoofingMaterialService],
})
export class RoofingMaterialModule {}
