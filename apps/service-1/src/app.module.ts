import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { CompanyModule } from "./company/company.module";
import { OfficeLocationModule } from "./officeLocation/officeLocation.module";
import { PricingModule } from "./pricing/pricing.module";
import { MarketModule } from "./market/market.module";
import { CityModule } from "./city/city.module";
import { RoofingMaterialModule } from "./roofingMaterial/roofingMaterial.module";
import { ColorModule } from "./color/color.module";
import { JobModule } from "./job/job.module";
import { AddressModule } from "./address/address.module";
import { BidModule } from "./bid/bid.module";
import { LineItemModule } from "./lineItem/lineItem.module";
import { DetailModule } from "./detail/detail.module";
import { ImageModule } from "./image/image.module";
import { MeasurementModule } from "./measurement/measurement.module";
import { ReportModule } from "./report/report.module";
import { SsModule } from "./ss/ss.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    CompanyModule,
    OfficeLocationModule,
    PricingModule,
    MarketModule,
    CityModule,
    RoofingMaterialModule,
    ColorModule,
    JobModule,
    AddressModule,
    BidModule,
    LineItemModule,
    DetailModule,
    ImageModule,
    MeasurementModule,
    ReportModule,
    SsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
