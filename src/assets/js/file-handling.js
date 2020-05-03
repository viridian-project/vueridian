const fhandling = {
  loadImg: url => {
    if (!url.startsWith("http")) {
      console.log("@/assets/" + url);
      return require("@/assets/" + url);
    }
    return url;
  }
};

export default fhandling;
