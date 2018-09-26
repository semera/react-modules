import * as React from "react";
import ICisModule, { IMenuItem } from "./core";

import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "./datagen";

class Tabulka extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(1000)
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          columns={[
            {
              Header: "Name",
              columns: [
                { Header: "First Name", accessor: "firstName" },
                { Header: "Last Name", accessor: "lastName" }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: props => <span>CC Age</span>,
                  id: "age",
                  accessor: d => d,
                  Cell: row => (
                    <a href={row.value["status"]}>{row.value["age"]}</a>
                  )
                },
                { Header: "Status", accessor: "status" }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default class TableModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "tablem", caption: "Tabulka" };
  }
  GetComponent(): JSX.Element {
    return <Tabulka />;
  }
}

// https://react-table.js.org/#/story/simple-table
