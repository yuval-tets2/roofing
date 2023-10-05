/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OfficeLocation, Pricing, Company } from "@prisma/client";

export class OfficeLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OfficeLocationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationCountArgs>
  ): Promise<number> {
    return this.prisma.officeLocation.count(args);
  }

  async findMany<T extends Prisma.OfficeLocationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationFindManyArgs>
  ): Promise<OfficeLocation[]> {
    return this.prisma.officeLocation.findMany(args);
  }
  async findOne<T extends Prisma.OfficeLocationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationFindUniqueArgs>
  ): Promise<OfficeLocation | null> {
    return this.prisma.officeLocation.findUnique(args);
  }
  async create<T extends Prisma.OfficeLocationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationCreateArgs>
  ): Promise<OfficeLocation> {
    return this.prisma.officeLocation.create<T>(args);
  }
  async update<T extends Prisma.OfficeLocationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationUpdateArgs>
  ): Promise<OfficeLocation> {
    return this.prisma.officeLocation.update<T>(args);
  }
  async delete<T extends Prisma.OfficeLocationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfficeLocationDeleteArgs>
  ): Promise<OfficeLocation> {
    return this.prisma.officeLocation.delete(args);
  }

  async findPricing(
    parentId: string,
    args: Prisma.PricingFindManyArgs
  ): Promise<Pricing[]> {
    return this.prisma.officeLocation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pricing(args);
  }

  async getCompany(parentId: string): Promise<Company | null> {
    return this.prisma.officeLocation
      .findUnique({
        where: { id: parentId },
      })
      .company();
  }
}