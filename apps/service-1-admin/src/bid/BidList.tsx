import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const BidList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bids"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
