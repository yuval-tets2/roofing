import { Module } from "@nestjs/common";
import { OfficeLocationModuleBase } from "./base/officeLocation.module.base";
import { OfficeLocationService } from "./officeLocation.service";
import { OfficeLocationController } from "./officeLocation.controller";
import { OfficeLocationResolver } from "./officeLocation.resolver";

@Module({
  imports: [OfficeLocationModuleBase],
  controllers: [OfficeLocationController],
  providers: [OfficeLocationService, OfficeLocationResolver],
  exports: [OfficeLocationService],
})
export class OfficeLocationModule {}
