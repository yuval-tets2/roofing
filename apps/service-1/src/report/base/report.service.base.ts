/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Report, Job } from "@prisma/client";

export class ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReportCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportCountArgs>
  ): Promise<number> {
    return this.prisma.report.count(args);
  }

  async findMany<T extends Prisma.ReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>
  ): Promise<Report[]> {
    return this.prisma.report.findMany(args);
  }
  async findOne<T extends Prisma.ReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>
  ): Promise<Report | null> {
    return this.prisma.report.findUnique(args);
  }
  async create<T extends Prisma.ReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportCreateArgs>
  ): Promise<Report> {
    return this.prisma.report.create<T>(args);
  }
  async update<T extends Prisma.ReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportUpdateArgs>
  ): Promise<Report> {
    return this.prisma.report.update<T>(args);
  }
  async delete<T extends Prisma.ReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportDeleteArgs>
  ): Promise<Report> {
    return this.prisma.report.delete(args);
  }

  async getJob(parentId: string): Promise<Job | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .job();
  }
}