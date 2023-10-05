import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetailService } from "./detail.service";
import { DetailControllerBase } from "./base/detail.controller.base";

@swagger.ApiTags("details")
@common.Controller("details")
export class DetailController extends DetailControllerBase {
  constructor(protected readonly service: DetailService) {
    super(service);
  }
}
