import { LineItem as TLineItem } from "../api/lineItem/LineItem";

export const LINEITEM_TITLE_FIELD = "details";

export const LineItemTitle = (record: TLineItem): string => {
  return record.details?.toString() || String(record.id);
};
