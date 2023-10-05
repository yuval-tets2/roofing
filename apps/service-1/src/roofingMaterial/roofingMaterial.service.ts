import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoofingMaterialServiceBase } from "./base/roofingMaterial.service.base";

@Injectable()
export class RoofingMaterialService extends RoofingMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
