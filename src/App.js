import React, { Fragment, useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";
import useOnClickOutside from "./modules/onClickOutside";
import "./styles/App.css";

export default () => {
  const setRef = useRef(null);
  const [sidebar, setSideBar] = useState();
  useOnClickOutside(setRef, () => setSideBar(false));

  return (
    <Fragment>
      <Header sidebar={sidebar} setSideBar={setSideBar} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              sidebar={sidebar}
              setRef={setRef}
              setSideBar={setSideBar}
            />
          )}
        />
      </Switch>
    </Fragment>
  );
};
