import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SsService } from "./ss.service";
import { SsControllerBase } from "./base/ss.controller.base";

@swagger.ApiTags("sses")
@common.Controller("sses")
export class SsController extends SsControllerBase {
  constructor(protected readonly service: SsService) {
    super(service);
  }
}
