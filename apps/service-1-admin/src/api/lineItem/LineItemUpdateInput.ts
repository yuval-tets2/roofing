import { BidWhereUniqueInput } from "../bid/BidWhereUniqueInput";

export type LineItemUpdateInput = {
  bid?: BidWhereUniqueInput;
  details?: string;
  price?: number;
  roofingTypeId?: string;
  wasteFactor?: number;
};
