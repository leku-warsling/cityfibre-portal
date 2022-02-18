const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      'react': toPath('node_modules/react'),
      '@emotion/react': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      '@emotion/core': toPath('node_modules/@emotion/react'),
      'emotion-theming': toPath('node_modules/@emotion/react'),
    };

    return config;
  },
};
