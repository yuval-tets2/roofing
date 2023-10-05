import { Module } from "@nestjs/common";
import { PricingModuleBase } from "./base/pricing.module.base";
import { PricingService } from "./pricing.service";
import { PricingController } from "./pricing.controller";
import { PricingResolver } from "./pricing.resolver";

@Module({
  imports: [PricingModuleBase],
  controllers: [PricingController],
  providers: [PricingService, PricingResolver],
  exports: [PricingService],
})
export class PricingModule {}
