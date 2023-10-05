import { City } from "../city/City";

export type Market = {
  cities?: Array<City>;
  createdAt: Date;
  id: string;
  name: string;
  status: string;
  updatedAt: Date;
};
