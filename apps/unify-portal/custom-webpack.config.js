const { merge } = require("webpack-merge")

module.exports = (config, context) => {
  return merge(config, {
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime",
      },
    },
  })
}
