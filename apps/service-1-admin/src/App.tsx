import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { OfficeLocationList } from "./officeLocation/OfficeLocationList";
import { OfficeLocationCreate } from "./officeLocation/OfficeLocationCreate";
import { OfficeLocationEdit } from "./officeLocation/OfficeLocationEdit";
import { OfficeLocationShow } from "./officeLocation/OfficeLocationShow";
import { PricingList } from "./pricing/PricingList";
import { PricingCreate } from "./pricing/PricingCreate";
import { PricingEdit } from "./pricing/PricingEdit";
import { PricingShow } from "./pricing/PricingShow";
import { MarketList } from "./market/MarketList";
import { MarketCreate } from "./market/MarketCreate";
import { MarketEdit } from "./market/MarketEdit";
import { MarketShow } from "./market/MarketShow";
import { CityList } from "./city/CityList";
import { CityCreate } from "./city/CityCreate";
import { CityEdit } from "./city/CityEdit";
import { CityShow } from "./city/CityShow";
import { RoofingMaterialList } from "./roofingMaterial/RoofingMaterialList";
import { RoofingMaterialCreate } from "./roofingMaterial/RoofingMaterialCreate";
import { RoofingMaterialEdit } from "./roofingMaterial/RoofingMaterialEdit";
import { RoofingMaterialShow } from "./roofingMaterial/RoofingMaterialShow";
import { ColorList } from "./color/ColorList";
import { ColorCreate } from "./color/ColorCreate";
import { ColorEdit } from "./color/ColorEdit";
import { ColorShow } from "./color/ColorShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { BidList } from "./bid/BidList";
import { BidCreate } from "./bid/BidCreate";
import { BidEdit } from "./bid/BidEdit";
import { BidShow } from "./bid/BidShow";
import { LineItemList } from "./lineItem/LineItemList";
import { LineItemCreate } from "./lineItem/LineItemCreate";
import { LineItemEdit } from "./lineItem/LineItemEdit";
import { LineItemShow } from "./lineItem/LineItemShow";
import { DetailList } from "./detail/DetailList";
import { DetailCreate } from "./detail/DetailCreate";
import { DetailEdit } from "./detail/DetailEdit";
import { DetailShow } from "./detail/DetailShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { MeasurementList } from "./measurement/MeasurementList";
import { MeasurementCreate } from "./measurement/MeasurementCreate";
import { MeasurementEdit } from "./measurement/MeasurementEdit";
import { MeasurementShow } from "./measurement/MeasurementShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"service1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="OfficeLocation"
          list={OfficeLocationList}
          edit={OfficeLocationEdit}
          create={OfficeLocationCreate}
          show={OfficeLocationShow}
        />
        <Resource
          name="Pricing"
          list={PricingList}
          edit={PricingEdit}
          create={PricingCreate}
          show={PricingShow}
        />
        <Resource
          name="Market"
          list={MarketList}
          edit={MarketEdit}
          create={MarketCreate}
          show={MarketShow}
        />
        <Resource
          name="City"
          list={CityList}
          edit={CityEdit}
          create={CityCreate}
          show={CityShow}
        />
        <Resource
          name="RoofingMaterial"
          list={RoofingMaterialList}
          edit={RoofingMaterialEdit}
          create={RoofingMaterialCreate}
          show={RoofingMaterialShow}
        />
        <Resource
          name="Color"
          list={ColorList}
          edit={ColorEdit}
          create={ColorCreate}
          show={ColorShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Bid"
          list={BidList}
          edit={BidEdit}
          create={BidCreate}
          show={BidShow}
        />
        <Resource
          name="LineItem"
          list={LineItemList}
          edit={LineItemEdit}
          create={LineItemCreate}
          show={LineItemShow}
        />
        <Resource
          name="Detail"
          list={DetailList}
          edit={DetailEdit}
          create={DetailCreate}
          show={DetailShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="Measurement"
          list={MeasurementList}
          edit={MeasurementEdit}
          create={MeasurementCreate}
          show={MeasurementShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
