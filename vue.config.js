// vue.config.js
module.exports = {
  publicPath: "/mockup/",
  configureWebpack: {
    module: {
      noParse: /\.txt$|\.odt$|LICENSE$/
    }
  }
};
