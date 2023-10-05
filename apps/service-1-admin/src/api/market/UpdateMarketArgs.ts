import { MarketWhereUniqueInput } from "./MarketWhereUniqueInput";
import { MarketUpdateInput } from "./MarketUpdateInput";

export type UpdateMarketArgs = {
  where: MarketWhereUniqueInput;
  data: MarketUpdateInput;
};
