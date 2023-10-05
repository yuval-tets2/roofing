import { RoofingMaterialWhereInput } from "./RoofingMaterialWhereInput";
import { RoofingMaterialOrderByInput } from "./RoofingMaterialOrderByInput";

export type RoofingMaterialFindManyArgs = {
  where?: RoofingMaterialWhereInput;
  orderBy?: Array<RoofingMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
