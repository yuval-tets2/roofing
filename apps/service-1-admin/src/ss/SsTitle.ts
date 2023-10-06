import { Ss as TSs } from "../api/ss/Ss";

export const SS_TITLE_FIELD = "id";

export const SsTitle = (record: TSs): string => {
  return record.id?.toString() || String(record.id);
};
