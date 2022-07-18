module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "BookApplication"
    },
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8080",
      },
    },
  },
};
