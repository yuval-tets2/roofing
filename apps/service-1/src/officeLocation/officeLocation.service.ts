import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OfficeLocationServiceBase } from "./base/officeLocation.service.base";

@Injectable()
export class OfficeLocationService extends OfficeLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
