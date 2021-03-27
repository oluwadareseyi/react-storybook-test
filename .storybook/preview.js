import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./context";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "Default theme",
    values: [
      {
        name: "Default theme",
        value: "#ffffff",
      },
      {
        name: "Dark theme",
        value: "#050449",
      },
    ],
  },
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
