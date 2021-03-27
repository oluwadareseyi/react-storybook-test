import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import myTheme from "./my-theme";

addons.setConfig({
  theme: myTheme,
});
