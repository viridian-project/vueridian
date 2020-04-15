// Some constants used internally, but not exported:
const red = [255, 0, 0];
const yellow = [255, 210, 0]; // less biting, warmer yellow than [255, 255, 0]
const green = [0, 128, 0];

export default {
  calcTotalScore: (score, weight) => {
    let totalScore = 0;
    for (let key in score) {
      totalScore += score[key] * weight[key];
    }
    return Math.round(totalScore);
  },
  calcScoreColor: score => {
    let color = [0, 0, 0];
    score = score / 100;
    if (score < 0) {
      for (let i in [0, 1, 2]) {
        color[i] = -score * red[i] + (1 + score) * yellow[i];
      }
    } else if (score > 0) {
      for (let i in [0, 1, 2]) {
        color[i] = (1 - score) * yellow[i] + score * green[i];
      }
    } else {
      color = yellow;
    }
    return color;
  },
  concatPriceAndCurrency: (price, currency, locale) => {
    return parseFloat(price).toLocaleString(locale, {
      style: "currency",
      currency: currency
    });
  },
  setDefaultIfEmpty: prefLocale => {
    if (Object.keys(prefLocale).length == 0) {
      prefLocale = {
        name: "",
        description: "",
        quantities: [],
        price: "",
        currency: "",
        imageUrls: []
      };
    }
    return prefLocale;
  }
};
