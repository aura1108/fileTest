import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserFileList } from "./userFile/UserFileList";
import { UserFileCreate } from "./userFile/UserFileCreate";
import { UserFileEdit } from "./userFile/UserFileEdit";
import { UserFileShow } from "./userFile/UserFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"user-file"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserFile"
          list={UserFileList}
          edit={UserFileEdit}
          create={UserFileCreate}
          show={UserFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
