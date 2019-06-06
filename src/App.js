import React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
console.log(dataProvider);
const App = () => (
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
);
const sassExtract = require("sass-extract");

sassExtract
  .render({
    file: "./sass/_global_vars.scss"
  })
  .then(rendered => {
    console.log(rendered.vars);
    console.log(rendered.css.toString());
  });

export default App;
