import * as React from "react";
import ICisModule, { IMenuItem } from "./core";
//import { EnhancedComponent } from "./hoc";
import { Registered } from "react-registry";
require("./registr");

// ********************************************************************************

function RegistryComponent() {
  return (
    <div>
      <Registered id="TitleComponent" text="Hello Registry">
        <div>A child</div>
      </Registered>
    </div>
  );
}

// ********************************************************************************

export default class RegistryModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "regmodule", caption: "Registry Example" };
  }
  GetComponent(): JSX.Element {
    return <RegistryComponent />;
  }
}
