import { Module } from "@nestjs/common";
import { MarketModuleBase } from "./base/market.module.base";
import { MarketService } from "./market.service";
import { MarketController } from "./market.controller";
import { MarketResolver } from "./market.resolver";

@Module({
  imports: [MarketModuleBase],
  controllers: [MarketController],
  providers: [MarketService, MarketResolver],
  exports: [MarketService],
})
export class MarketModule {}
