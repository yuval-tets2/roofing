import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";

export type CityCreateInput = {
  market: MarketWhereUniqueInput;
  name: string;
  roofingMaterialIds: string;
  state?: string | null;
  status: string;
};
