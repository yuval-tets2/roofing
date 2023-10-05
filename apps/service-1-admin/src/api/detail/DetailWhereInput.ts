import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type DetailWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  price?: FloatFilter;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
};
