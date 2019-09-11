import * as React from "react";
import { storiesOf } from "@storybook/react";
import ExampleTypescriptReact from "../src/index";

storiesOf("ExampleTypescriptReact", module).add(
  "ExampleTypescriptReact",
  () => <ExampleTypescriptReact compiler="TypeScript" framework="React" />
);
