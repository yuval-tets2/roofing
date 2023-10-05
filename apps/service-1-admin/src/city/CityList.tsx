import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MARKET_TITLE_FIELD } from "../market/MarketTitle";

export const CityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Market" source="market.id" reference="Market">
          <TextField source={MARKET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="Roofing Material Ids" source="roofingMaterialIds" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
