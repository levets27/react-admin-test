import React, { useState } from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App = () => {
  /*const [brand, setBrand] = useState("wf");
  const toggleBrand = () => {
    return brand === "wf" ? setBrand("joss") : setBrand("wf");
  };*/

  const brands = ["wf", "joss", "seattle"];
  return (
    <>
      <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
      <div>
        {brands.map(brand => {
          const variables = require(`./sass/${brand}/global_vars.scss`);
          console.log(variables);
          return Object.entries(variables).map((color, i) => (
            <div key={i} style={{ background: color[1], color: "white" }}>
              {color[0]}: {color[1]}
            </div>
          ));
        })}
      </div>
    </>
  );
};

export default App;
