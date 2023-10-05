import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetailServiceBase } from "./base/detail.service.base";

@Injectable()
export class DetailService extends DetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
