import { BidWhereUniqueInput } from "../bid/BidWhereUniqueInput";

export type LineItemCreateInput = {
  bid: BidWhereUniqueInput;
  details: string;
  price: number;
  roofingTypeId: string;
  wasteFactor: number;
};
