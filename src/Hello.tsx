import * as React from "react";

interface Props {
  name: string;
  sur: string;
}

export default ({ name }: Props) => <h1>Hello {name}!</h1>;

//export default (prop: Props) => <h1>Hello {prop.name}!</h1>;
// https://hackernoon.com/js-var-let-or-const-67e51dbb716f
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
