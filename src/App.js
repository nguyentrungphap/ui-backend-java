import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import AdminPanel from "./component/AdminPanel";
import {
  listCategory,
  editCategory,
  createCategory,
} from "./component/Category";
import simpleRestProvider from "ra-data-simple-rest";
import {listProduct,  createProduct, editProduct } from "./component/Product";
import { createUser, editUser, listUser } from "./component/User";
const httpClient = fetchUtils.fetchJson;
function App() {
  return (
    <Admin
      dashboard={AdminPanel}
      dataProvider={simpleRestProvider("http://localhost:8080/api", httpClient)}
    >
      <Resource
        name="categories"
        list={listCategory}
        edit={editCategory}
        create={createCategory}
      />
      
      <Resource
        name="products"
        list={listProduct}
        edit={editProduct}
        create={createProduct}
      />
      <Resource
        name="user"
        list={listUser}
        edit={editUser}
        create={createUser}
      />
    </Admin>
  );
}

export default App;
