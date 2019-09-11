import * as React from "react";
import { storiesOf } from "@storybook/react";
import Example2TypescriptReact from "../src/index";

storiesOf("Example2TypescriptReact", module).add(
  "Example2TypescriptReact",
  () => <Example2TypescriptReact compiler="TypeScript" framework="React" />
);
