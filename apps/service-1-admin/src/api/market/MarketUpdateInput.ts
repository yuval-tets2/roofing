import { CityUpdateManyWithoutMarketsInput } from "./CityUpdateManyWithoutMarketsInput";

export type MarketUpdateInput = {
  cities?: CityUpdateManyWithoutMarketsInput;
  name?: string;
  status?: string;
};
