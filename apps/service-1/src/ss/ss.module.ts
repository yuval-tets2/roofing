import { Module } from "@nestjs/common";
import { SsModuleBase } from "./base/ss.module.base";
import { SsService } from "./ss.service";
import { SsController } from "./ss.controller";
import { SsResolver } from "./ss.resolver";

@Module({
  imports: [SsModuleBase],
  controllers: [SsController],
  providers: [SsService, SsResolver],
  exports: [SsService],
})
export class SsModule {}
