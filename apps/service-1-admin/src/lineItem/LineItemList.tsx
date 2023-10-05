import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BID_TITLE_FIELD } from "../bid/BidTitle";

export const LineItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LineItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
