/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageService } from "../image.service";
import { ImageCreateInput } from "./ImageCreateInput";
import { ImageWhereInput } from "./ImageWhereInput";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageUpdateInput } from "./ImageUpdateInput";
import { Image } from "./Image";

export class ImageControllerBase {
  constructor(protected readonly service: ImageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Image })
  async create(@common.Body() data: ImageCreateInput): Promise<Image> {
    return await this.service.create({
      data: {
        ...data,

        job: {
          connect: data.job,
        },
      },
      select: {
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Image] })
  @ApiNestedQuery(ImageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Image[]> {
    const args = plainToClass(ImageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() data: ImageUpdateInput
  ): Promise<Image | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          job: {
            connect: data.job,
          },
        },
        select: {
          createdAt: true,
          id: true,

          job: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          job: {
            select: {
              id: true,
            },
          },

          typeField: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
