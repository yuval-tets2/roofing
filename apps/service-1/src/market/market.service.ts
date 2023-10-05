import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketServiceBase } from "./base/market.service.base";

@Injectable()
export class MarketService extends MarketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
