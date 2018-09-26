import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./index.css";

// react imports
import { Provider } from "react-redux";

function dump(obj) {
  console.log(JSON.stringify(obj));
  return obj;
}

// ********************************************************************************
// Main components
// ********************************************************************************

interface SubMenuProps {
  name: string;
}

function SubMenu({ name }: SubMenuProps) {
  return (
    <div>
      submenu {name}
      <ul>
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    </div>
  );
}

function MyMenu() {
  let mods = Boot.getInstance().Modules;

  let menu = [];
  for (var i = 0; i < mods.length; i++) {
    let mod = mods[i];

    menu.push(
      <div key={i}>
        <Link to={"/" + mod.GetMenu().name}>{mod.GetMenu().caption}</Link>
        <Route
          path={"/" + mod.GetMenu().name}
          render={() => <SubMenu name={mod.GetMenu().name} />}
        />
      </div>
    );
  }

  return (
    <div className="menu">
      <h3>nejaky menu</h3>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/pepa"}>pepa</Link>
        {menu}
      </div>
    </div>
  );
}

// ********************************************************************************

function PepaCmp() {
  return <div>AAAAAAAAAAAAAAAAAAA</div>;
}

function MyRoutedContent() {
  let mods = Boot.getInstance().Modules;

  let routy = [];
  for (var i = 0; i < mods.length; i++) {
    let mod = mods[i];
    routy.push(
      <Route
        path={"/" + mod.GetMenu().name}
        render={() => mod.GetComponent()}
      />
    );
  }

  return (
    <div className="my-content">
      <h3>nejaky codntent</h3>
      <div>{routy}</div>
    </div>
  );
}

// ********************************************************************************
function MyFooter(cfg: IConfiguration): JSX.Element {
  let b = "NE";
  let md = "NE";
  if (cfg.hasBillingModule) b = "ANO";
  if (cfg.hasMiddleName) md = "ANO";
  return (
    <div className="footer">
      <Route path={"/pepa"} render={() => new PepaCmp()} />
      FOOTER: configuration => billing: {b}, middle name: {md}
    </div>
  );
}

// ********************************************************************************
// Application
// ********************************************************************************

import Boot from "./bootstrapper";

class MyApp extends React.Component {
  render() {
    let cfg = Boot.getInstance().Configuration;

    return (
      <Router>
        <div className="wrapper">
          <header className="header">Header</header>
          <div className="main">
            <MyRoutedContent />
          </div>
          <aside className="aside aside-1">
            <MyMenu />
          </aside>
          <footer className="footer">
            <MyFooter {...cfg} />
          </footer>
        </div>
      </Router>
    );
  }
}
import { store } from "./redux";

render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById("root")
);
