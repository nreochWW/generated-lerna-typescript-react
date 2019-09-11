import * as React from "react";
import styled from "styled-components";

export interface Example2TypescriptReactProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const Example2TypescriptReact = (props: Example2TypescriptReactProps) => (
  <Wrapper>
    <h1>
      Another Example: {props.compiler} and {props.framework}!
    </h1>
  </Wrapper>
);

export default Example2TypescriptReact;
