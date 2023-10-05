import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BidTitle } from "../bid/BidTitle";

export const LineItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="bid.id" reference="Bid" label="Bid">
          <SelectInput optionText={BidTitle} />
        </ReferenceInput>
        <TextInput label="Details" source="details" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Roofing Type Id" source="roofingTypeId" />
        <NumberInput label="Waste Factor" source="wasteFactor" />
      </SimpleForm>
    </Create>
  );
};
