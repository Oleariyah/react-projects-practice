import React, { Fragment, useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { Home, Spring } from "./pages";
import useOnClickOutside from "./modules/onClickOutside";
import "./styles/App.css";

export default () => {
  const setRef = useRef(null);
  const [sidebar, setSideBar] = useState();
  useOnClickOutside(setRef, () => setSideBar(false));

  return (
    <Fragment>
      <Header sidebar={sidebar} setSideBar={setSideBar} />
      {sidebar && <Sidebar isOpen={sidebar} setRef={setRef} />}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/react-spring" render={() => <Spring />} />
      </Switch>
    </Fragment>
  );
};
