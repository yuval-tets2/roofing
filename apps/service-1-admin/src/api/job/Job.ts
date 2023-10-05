import { Address } from "../address/Address";
import { Bid } from "../bid/Bid";
import { Image } from "../image/Image";
import { Measurement } from "../measurement/Measurement";
import { Report } from "../report/Report";

export type Job = {
  address?: Address | null;
  addressId: string | null;
  bids?: Array<Bid>;
  createdAt: Date;
  id: string;
  images?: Array<Image>;
  measurements?: Array<Measurement>;
  reports?: Array<Report>;
  selectedBidAt: Date | null;
  selectedBidId: string | null;
  status: string;
  updatedAt: Date;
  userId: string;
};
