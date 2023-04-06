/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../../button/src/Button.stories.jsx",
    "../../loading/src/Loading.stories.jsx",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
