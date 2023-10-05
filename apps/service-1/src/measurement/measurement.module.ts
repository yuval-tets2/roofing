import { Module } from "@nestjs/common";
import { MeasurementModuleBase } from "./base/measurement.module.base";
import { MeasurementService } from "./measurement.service";
import { MeasurementController } from "./measurement.controller";
import { MeasurementResolver } from "./measurement.resolver";

@Module({
  imports: [MeasurementModuleBase],
  controllers: [MeasurementController],
  providers: [MeasurementService, MeasurementResolver],
  exports: [MeasurementService],
})
export class MeasurementModule {}
