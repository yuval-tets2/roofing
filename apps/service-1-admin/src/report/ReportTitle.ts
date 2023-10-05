import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "typeField";

export const ReportTitle = (record: TReport): string => {
  return record.typeField?.toString() || String(record.id);
};
