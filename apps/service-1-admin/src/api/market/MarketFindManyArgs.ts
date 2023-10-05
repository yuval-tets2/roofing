import { MarketWhereInput } from "./MarketWhereInput";
import { MarketOrderByInput } from "./MarketOrderByInput";

export type MarketFindManyArgs = {
  where?: MarketWhereInput;
  orderBy?: Array<MarketOrderByInput>;
  skip?: number;
  take?: number;
};
