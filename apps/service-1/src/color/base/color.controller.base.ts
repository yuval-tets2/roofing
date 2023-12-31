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
import { ColorService } from "../color.service";
import { ColorCreateInput } from "./ColorCreateInput";
import { ColorWhereInput } from "./ColorWhereInput";
import { ColorWhereUniqueInput } from "./ColorWhereUniqueInput";
import { ColorFindManyArgs } from "./ColorFindManyArgs";
import { ColorUpdateInput } from "./ColorUpdateInput";
import { Color } from "./Color";

export class ColorControllerBase {
  constructor(protected readonly service: ColorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Color })
  async create(@common.Body() data: ColorCreateInput): Promise<Color> {
    return await this.service.create({
      data: {
        ...data,

        roofingMaterial: {
          connect: data.roofingMaterial,
        },
      },
      select: {
        color: true,
        createdAt: true,
        id: true,
        pictureUrl: true,

        roofingMaterial: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Color] })
  @ApiNestedQuery(ColorFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Color[]> {
    const args = plainToClass(ColorFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        color: true,
        createdAt: true,
        id: true,
        pictureUrl: true,

        roofingMaterial: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Color })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ColorWhereUniqueInput
  ): Promise<Color | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        color: true,
        createdAt: true,
        id: true,
        pictureUrl: true,

        roofingMaterial: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Color })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ColorWhereUniqueInput,
    @common.Body() data: ColorUpdateInput
  ): Promise<Color | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          roofingMaterial: {
            connect: data.roofingMaterial,
          },
        },
        select: {
          color: true,
          createdAt: true,
          id: true,
          pictureUrl: true,

          roofingMaterial: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Color })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ColorWhereUniqueInput
  ): Promise<Color | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          color: true,
          createdAt: true,
          id: true,
          pictureUrl: true,

          roofingMaterial: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
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
