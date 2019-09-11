import * as React from "react";
import { shallow } from "enzyme";
import ExampleTypescriptReact from "../src/index";

describe("ExampleTypescriptReact package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <ExampleTypescriptReact compiler="TypeScript" framework="React" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
