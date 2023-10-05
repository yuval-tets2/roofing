import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeasurementService } from "./measurement.service";
import { MeasurementControllerBase } from "./base/measurement.controller.base";

@swagger.ApiTags("measurements")
@common.Controller("measurements")
export class MeasurementController extends MeasurementControllerBase {
  constructor(protected readonly service: MeasurementService) {
    super(service);
  }
}
