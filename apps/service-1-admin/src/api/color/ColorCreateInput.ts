import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";

export type ColorCreateInput = {
  color: string;
  pictureUrl?: string | null;
  roofingMaterial: RoofingMaterialWhereUniqueInput;
  status: string;
};
