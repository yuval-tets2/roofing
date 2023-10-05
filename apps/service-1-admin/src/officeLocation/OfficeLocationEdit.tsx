import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { PricingTitle } from "../pricing/PricingTitle";

export const OfficeLocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Country" source="country" />
        <TextInput label="Description" source="description" />
        <TextInput label="Email" source="email" />
        <NumberInput step={1} label="Founding Year" source="foundingYear" />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Logo Status" source="logoStatus" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceArrayInput
          source="pricing"
          reference="Pricing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PricingTitle} />
        </ReferenceArrayInput>
        <TextInput label="State" source="state" />
        <TextInput label="Status" source="status" />
        <TextInput label="Street1" source="street1" />
        <TextInput label="Street2" source="street2" />
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
