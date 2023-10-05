import { Bid as TBid } from "../api/bid/Bid";

export const BID_TITLE_FIELD = "companyId";

export const BidTitle = (record: TBid): string => {
  return record.companyId?.toString() || String(record.id);
};
