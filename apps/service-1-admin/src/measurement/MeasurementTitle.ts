import { Measurement as TMeasurement } from "../api/measurement/Measurement";

export const MEASUREMENT_TITLE_FIELD = "typeField";

export const MeasurementTitle = (record: TMeasurement): string => {
  return record.typeField?.toString() || String(record.id);
};
