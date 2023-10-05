import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LineItemService } from "./lineItem.service";
import { LineItemControllerBase } from "./base/lineItem.controller.base";

@swagger.ApiTags("lineItems")
@common.Controller("lineItems")
export class LineItemController extends LineItemControllerBase {
  constructor(protected readonly service: LineItemService) {
    super(service);
  }
}
