import * as React from "react";
import ICisModule, { IMenuItem } from "./core";
import styled, { css, StyledFunction } from "styled-components";

interface MyDiv {
  primary?: boolean;
}

// typed css
const mydiv: StyledFunction<MyDiv & React.HTMLProps<HTMLInputElement>> =
  styled.div;
const myinput: StyledFunction<MyDiv & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const Divik = mydiv`
color: red;
margin-left: 5px;
${props =>
  props.primary &&
  css`
  font-weight: bold
  color: orange
`};
`;

const Inputik = myinput`
width: ${props => props.width || "200px"}
margin-left: 10px;

${props =>
  props.primary &&
  css`
  background: red;
  color: yellow,
`};
`;

const DrsnejDiv = styled(Divik)`
background: #250033;
`;

function PureComponentPlateb() {
  return (
    <DrsnejDiv>
      <h4>Jsi na billing strance</h4>
      <Divik primary>
        first name <Inputik primary />
      </Divik>
      <Divik>
        surname <Inputik width="215px" />
      </Divik>
    </DrsnejDiv>
  );
}

export default class StyledModule implements ICisModule {
  GetMenu(): IMenuItem {
    return { name: "styletest", caption: "Styled: CSS in JS" };
  }
  GetComponent(): JSX.Element {
    return <PureComponentPlateb />;
  }
}
