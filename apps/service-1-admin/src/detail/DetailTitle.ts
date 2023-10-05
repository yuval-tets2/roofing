import { Detail as TDetail } from "../api/detail/Detail";

export const DETAIL_TITLE_FIELD = "typeField";

export const DetailTitle = (record: TDetail): string => {
  return record.typeField?.toString() || String(record.id);
};
