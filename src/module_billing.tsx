import * as React from "react";
import ICisModule, { IMenuItem } from "./core";
import Boot from "./bootstrapper";

// ********************************************************************************
// Billing Module
// ********************************************************************************

function PureComponentNames() {
  let midlleName;
  let cfg = Boot.getInstance().Configuration;

  if (cfg.hasMiddleName)
    midlleName = (
      <div>
        middle name <input />
      </div>
    );

  return (
    <div>
      <h4>Jsi na bill ing strance</h4>

      <div>
        first name <input />
      </div>
      {midlleName}
      <div>
        surname <input />
      </div>
    </div>
  );
}

class Abc extends React.Component {
  render() {
    return <h1>aaaa</h1>;
  }
}

export default class BillingModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "billing", caption: "Billing Module" };
  }
  GetComponent(): JSX.Element {
    return <Abc />;
  }
}
