import { Module } from "@nestjs/common";
import { DetailModuleBase } from "./base/detail.module.base";
import { DetailService } from "./detail.service";
import { DetailController } from "./detail.controller";
import { DetailResolver } from "./detail.resolver";

@Module({
  imports: [DetailModuleBase],
  controllers: [DetailController],
  providers: [DetailService, DetailResolver],
  exports: [DetailService],
})
export class DetailModule {}
