import { RoofingMaterial as TRoofingMaterial } from "../api/roofingMaterial/RoofingMaterial";

export const ROOFINGMATERIAL_TITLE_FIELD = "name";

export const RoofingMaterialTitle = (record: TRoofingMaterial): string => {
  return record.name?.toString() || String(record.id);
};
