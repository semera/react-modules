import { Registry } from "react-registry";
import * as React from "react";

interface IProps {
  text: string;
}

class TitleComponent extends React.Component<IProps> {
  render() {
    return (
      <div>
        <h1>{this.props.text} </h1>
        <p> {this.props.children} </p>
      </div>
    );
  }
}

Registry.register(TitleComponent, "TitleComponent");

///https://www.devnet.io/libs/react-registry/docs/#/registering
///https://medium.com/smartboxtv-engineering/building-a-component-registry-in-react-4504ca271e56
