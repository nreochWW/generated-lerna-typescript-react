import * as React from "react";
import { shallow } from "enzyme";
import Example2TypescriptReact from "../src/index";

describe("Example2TypescriptReact package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <Example2TypescriptReact compiler="TypeScript" framework="React" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
