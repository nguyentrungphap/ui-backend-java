import React from "react";
import { Admin, ListGuesser, Resource, fetchUtils } from "react-admin";
import AdminPanel from "./component/AdminPanel";
import {
  listCategory,
  editCategory,
  createCategory,
} from "./component/Category";
import simpleRestProvider from "ra-data-simple-rest";
const httpClient = fetchUtils.fetchJson;
function App() {
  return (
    <Admin
      dashboard={AdminPanel}
      dataProvider={simpleRestProvider("http://localhost:8080/api", httpClient)}
    >
      <Resource name="users" list={ListGuesser} />
      <Resource
        name="categories"
        list={listCategory}
        edit={editCategory}
        create={createCategory}
      />
    </Admin>
  );
}

export default App;
