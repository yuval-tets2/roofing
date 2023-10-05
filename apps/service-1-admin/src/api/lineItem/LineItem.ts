import { Bid } from "../bid/Bid";

export type LineItem = {
  bid?: Bid;
  createdAt: Date;
  details: string;
  id: string;
  price: number;
  roofingTypeId: string;
  updatedAt: Date;
  wasteFactor: number;
};
