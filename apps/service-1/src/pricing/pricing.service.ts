import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PricingServiceBase } from "./base/pricing.service.base";

@Injectable()
export class PricingService extends PricingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
