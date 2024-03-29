import * as React from "react";
import styled from "styled-components";

export interface ExampleTypescriptReactProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const ExampleTypescriptReact = (props: ExampleTypescriptReactProps) => (
  <Wrapper>
    <h1>
      Example: {props.compiler} and {props.framework}!
    </h1>
  </Wrapper>
);

export default ExampleTypescriptReact;
