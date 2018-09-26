// ********************************************************************************
// Admin Module
// ********************************************************************************

import * as React from "react";
import ICisModule, { MenuItem } from "./core";

interface AdminNajekaStrankaPro {}
interface AdminNajekaStrankaState {
  data: string;
}

class AdminNajekaStranka extends React.Component<
  AdminNajekaStrankaPro,
  AdminNajekaStrankaState
> {
  constructor(props: AdminNajekaStrankaPro) {
    super(props);
    this.state = { data: "non" };
  }

  // ukazka fetch
  // https://www.robinwieruch.de/react-fetching-data/
  componentDidMount() {
    fetch(
      "https://virtserver.swaggerhub.com/pepa/ajeje/1.0.0/item?searchString=1"
    )
      .then(response => response.json())
      //.then(data => dump(data))
      .then(data => this.setState({ data: data[0].Text }));
  }

  render() {
    return <div>Jsi na admin strance, data jsou {this.state.data}</div>;
  }
}

export default class AdminModule implements ICisModule {
  GetMenu(): MenuItem {
    return { name: "admin", caption: "Admin Module" };
  }
  GetComponent(): JSX.Element {
    return <AdminNajekaStranka />;
  }
}
