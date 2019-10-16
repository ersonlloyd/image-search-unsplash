const {
  override,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')
const path = require("path")

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#ffc000' },
  }),
  addWebpackAlias({
    "package": path.resolve(__dirname, "package.json"),
    "assets": path.resolve(__dirname, "src/assets"),
    "utils": path.resolve(__dirname, "src/utils"),
    "lib": path.resolve(__dirname, "src/lib"),
    "containers": path.resolve(__dirname, "src/containers"),
    "app": path.resolve(__dirname, "src/containers/app"),
  })
)
