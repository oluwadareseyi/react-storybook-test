module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-contexts",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
  ],
};
