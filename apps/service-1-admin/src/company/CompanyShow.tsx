import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="Founding Year" source="foundingYear" />
        <TextField label="Id" source="id" />
        <TextField label="Logo" source="logo" />
        <TextField label="Logo Status" source="logoStatus" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <TextField label="Street1" source="street1" />
        <TextField label="Street2" source="street2" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip Code" source="zipCode" />
        <ReferenceManyField
          reference="OfficeLocation"
          target="companyId"
          label="OfficeLocations"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="Founding Year" source="foundingYear" />
            <TextField label="Id" source="id" />
            <TextField label="Logo" source="logo" />
            <TextField label="Logo Status" source="logoStatus" />
            <TextField label="Name" source="name" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="State" source="state" />
            <TextField label="Status" source="status" />
            <TextField label="Street1" source="street1" />
            <TextField label="Street2" source="street2" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Zip Code" source="zipCode" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
