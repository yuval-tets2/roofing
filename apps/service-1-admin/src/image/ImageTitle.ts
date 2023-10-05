import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "typeField";

export const ImageTitle = (record: TImage): string => {
  return record.typeField?.toString() || String(record.id);
};
