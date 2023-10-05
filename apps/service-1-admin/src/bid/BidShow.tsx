import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BID_TITLE_FIELD } from "./BidTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const BidShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Company Id" source="companyId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quote Url" source="quoteUrl" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LineItem"
          target="bidId"
          label="LineItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Bid" source="bid.id" reference="Bid">
              <TextField source={BID_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <TextField label="Id" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Roofing Type Id" source="roofingTypeId" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Waste Factor" source="wasteFactor" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
