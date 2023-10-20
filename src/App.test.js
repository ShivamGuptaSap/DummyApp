import React from "react";
import {
  ThemeProvider,
  Menu,
  MenuItem,
  ToggleButton
} from "@ui5/webcomponents-react";

import { App } from "./App";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});
const wrapper = () => {
  return Enzyme.mount(
    <ThemeProvider>
      <ToggleButton />
    </ThemeProvider>
  );
};
test("Menu is present", () => {
  wrapper();
  expect(wrapper).toBeDefined();
});
