import { Job } from "../job/Job";

export type Image = {
  createdAt: Date;
  id: string;
  job?: Job;
  typeField: string;
  updatedAt: Date;
  url: string;
};
