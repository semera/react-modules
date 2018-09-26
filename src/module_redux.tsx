// ********************************************************************************
// Redux Module
// ********************************************************************************

import * as React from "react";
import ICisModule, { IMenuItem } from "./core";

interface CounterXPropA {
  title: string;
}

// import je kvuli redux connect
import { activateGeod, closeGeod } from "./redux";

interface CounterXProp {
  geod: CounterXPropA;
  closeGeod: Function;
  activateGeod: ((params: CounterXPropA) => void);
}

class CounterX extends React.Component<CounterXProp> {
  render() {
    const { geod } = this.props;
    return (
      <div>
        <h1>{geod.title || "Hello World!"}</h1>
        {this.props.geod.title ? (
          <button onClick={() => this.props.closeGeod()}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: "I am a geo dude!" })
            }
          >
            Click Me!
          </button>
        )}
      </div>
    );
  }
}

function ReduxComp() {
  return (
    <div>
      <h4>Jsi na redux strance</h4>
      <AppContainer />,
    </div>
  );
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  geod: state.geod
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod
};
import { connect } from "react-redux";
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterX);

export default class ReduxModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "redmod", caption: "Redux Module" };
  }
  GetComponent(): JSX.Element {
    return <ReduxComp />;
  }
}
