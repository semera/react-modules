import * as React from "react";
import ICisModule, { IMenuItem } from "./core";

function SimpleComponent() {
  return <div>THIS IS SIMPLE MODULE</div>;
}

export default class SimpleModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "simplemodul", caption: "Simple Example" };
  }
  GetComponent(): JSX.Element {
    return <SimpleComponent />;
  }
}
