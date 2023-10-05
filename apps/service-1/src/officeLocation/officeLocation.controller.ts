import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OfficeLocationService } from "./officeLocation.service";
import { OfficeLocationControllerBase } from "./base/officeLocation.controller.base";

@swagger.ApiTags("officeLocations")
@common.Controller("officeLocations")
export class OfficeLocationController extends OfficeLocationControllerBase {
  constructor(protected readonly service: OfficeLocationService) {
    super(service);
  }
}
