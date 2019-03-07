const path = require("path");

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "_exl_scrollable",
      externals: {
        react: "React"
      }
    }
  },
  webpack: {
    aliases: {
      src: path.resolve("src")
    },
    styles: {
      sass: [
        {
          test: /\.scss$/
        }
      ]
    }
  }
};
