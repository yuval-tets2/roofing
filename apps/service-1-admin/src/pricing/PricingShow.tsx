import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OFFICELOCATION_TITLE_FIELD } from "../officeLocation/OfficeLocationTitle";

export const PricingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Office Location"
          source="officelocation.id"
          reference="OfficeLocation"
        >
          <TextField source={OFFICELOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Roofing Material Id" source="roofingMaterialId" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
