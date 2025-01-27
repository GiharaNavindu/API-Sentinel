const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "popup.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"], // Add .jsx here
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
  },
};