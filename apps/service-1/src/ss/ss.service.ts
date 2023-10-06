import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsServiceBase } from "./base/ss.service.base";

@Injectable()
export class SsService extends SsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
