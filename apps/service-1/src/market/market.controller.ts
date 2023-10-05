import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketService } from "./market.service";
import { MarketControllerBase } from "./base/market.controller.base";

@swagger.ApiTags("markets")
@common.Controller("markets")
export class MarketController extends MarketControllerBase {
  constructor(protected readonly service: MarketService) {
    super(service);
  }
}
