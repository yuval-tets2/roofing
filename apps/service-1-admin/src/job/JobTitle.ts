import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "addressId";

export const JobTitle = (record: TJob): string => {
  return record.addressId?.toString() || String(record.id);
};
