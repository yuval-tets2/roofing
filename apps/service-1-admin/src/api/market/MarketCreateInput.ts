import { CityCreateNestedManyWithoutMarketsInput } from "./CityCreateNestedManyWithoutMarketsInput";

export type MarketCreateInput = {
  cities?: CityCreateNestedManyWithoutMarketsInput;
  name: string;
  status: string;
};
