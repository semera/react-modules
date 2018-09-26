import * as React from "react";
import * as yup from "yup";
import ICisModule, { IMenuItem } from "./core";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup.string().email()
});

interface State {
  name: string;
  age: string; // it should be number, string is there because validation test
  email: string;
}

class ValidComponentYup extends React.Component<{}, State> {
  state: State = { name: "", age: "", email: "" };

  render() {
    // check schema
    console.log(this.state);
    const valid = schema.isValidSync(this.state);

    return (
      <form>
        <div
          className="text"
          style={{ backgroundColor: valid ? "green" : "red" }}
        >
          validation result: {valid ? "OK" : "WRONG"}
        </div>
        {/* required string */}
        name:<input
          placeholder="your name"
          type="text"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <br />
        {/* required string */}
        age:<input
          placeholder="your age"
          type="text"
          value={this.state.age}
          onChange={event => this.setState({ age: event.target.value })}
        />
        <br />
        {/* required email */}
        email:<input
          placeholder="your email"
          type="text"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
        />
      </form>
    );
  }
}

class ValidationModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "validation", caption: "Validation form" };
  }
  GetComponent(): JSX.Element {
    return <ValidComponentYup />;
  }
}

export default ValidationModule;
