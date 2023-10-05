import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";

export type CityUpdateInput = {
  market?: MarketWhereUniqueInput;
  name?: string;
  roofingMaterialIds?: string;
  state?: string | null;
  status?: string;
};
