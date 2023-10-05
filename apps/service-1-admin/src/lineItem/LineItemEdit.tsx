import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";

export const LineItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bid.id" reference="Bid" label="Bid">
          <SelectInput optionText={BidTitle} />
        </ReferenceInput>
        <TextInput label="Details" source="details" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Roofing Type Id" source="roofingTypeId" />
        <NumberInput label="Waste Factor" source="wasteFactor" />
      </SimpleForm>
    </Edit>
  );
};
