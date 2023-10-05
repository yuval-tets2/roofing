import { Market as TMarket } from "../api/market/Market";

export const MARKET_TITLE_FIELD = "name";

export const MarketTitle = (record: TMarket): string => {
  return record.name?.toString() || String(record.id);
};
