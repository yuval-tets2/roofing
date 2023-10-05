import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { ImageUpdateManyWithoutJobsInput } from "./ImageUpdateManyWithoutJobsInput";
import { MeasurementUpdateManyWithoutJobsInput } from "./MeasurementUpdateManyWithoutJobsInput";
import { ReportUpdateManyWithoutJobsInput } from "./ReportUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  addressId?: string | null;
  bids?: BidUpdateManyWithoutJobsInput;
  images?: ImageUpdateManyWithoutJobsInput;
  measurements?: MeasurementUpdateManyWithoutJobsInput;
  reports?: ReportUpdateManyWithoutJobsInput;
  selectedBidAt?: Date | null;
  selectedBidId?: string | null;
  status?: string;
  userId?: string;
};
