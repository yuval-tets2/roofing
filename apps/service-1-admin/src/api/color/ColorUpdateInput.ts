import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";

export type ColorUpdateInput = {
  color?: string;
  pictureUrl?: string | null;
  roofingMaterial?: RoofingMaterialWhereUniqueInput;
  status?: string;
};
