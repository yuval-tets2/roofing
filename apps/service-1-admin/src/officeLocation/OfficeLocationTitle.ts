import { OfficeLocation as TOfficeLocation } from "../api/officeLocation/OfficeLocation";

export const OFFICELOCATION_TITLE_FIELD = "name";

export const OfficeLocationTitle = (record: TOfficeLocation): string => {
  return record.name?.toString() || String(record.id);
};
