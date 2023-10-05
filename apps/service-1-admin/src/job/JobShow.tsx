import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOB_TITLE_FIELD } from "./JobTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Address Id" source="addressId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <TextField label="Selected Bid At" source="selectedBidAt" />
        <TextField label="Selected Bid Id" source="selectedBidId" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User Id" source="userId" />
        <ReferenceManyField reference="Bid" target="jobId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="Company Id" source="companyId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quote Url" source="quoteUrl" />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Image" target="jobId" label="Images">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Measurement"
          target="jobId"
          label="Measurements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total" source="total" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Unit Of Measurement" source="unitOfMeasurement" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="jobId" label="Reports">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
