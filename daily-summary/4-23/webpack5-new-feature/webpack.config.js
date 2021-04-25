const path = require("path");
const chalk = require("chalk");
const { IgnorePlugin } = require("webpack");
const plugins = {
  htmlwebpack: require("html-webpack-plugin"),
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new plugins.htmlwebpack(),
    new IgnorePlugin({
      checkResource(resource, context) {
        console.log(chalk.blue.bgRed.bold(resource));
        return true;
      },
    }),
  ],
};
