import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ROOFINGMATERIAL_TITLE_FIELD } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Picture Url" source="pictureUrl" />
        <ReferenceField
          label="Roofing Material"
          source="roofingmaterial.id"
          reference="RoofingMaterial"
        >
          <TextField source={ROOFINGMATERIAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
