// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      noParse: /\.txt$|\.odt$|LICENSE$/
    }
  }
};
