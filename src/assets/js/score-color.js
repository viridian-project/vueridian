// Some constants used internally, but not exported:
const red = [255, 0, 0];
const yellow = [255, 210, 0]; // less biting, warmer yellow than [255, 255, 0]
const green = [0, 128, 0];

const scolor = {
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
  },
  prepareRating: rating => {
    let detailedColors = {};
    let detailedPositions = {};
    for (let key in rating.score) {
      if (rating.score[key] !== undefined) {
        let c = scolor.calcScoreColor(rating.score[key]);
        detailedColors[key] =
          "background-color: rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ");";
        detailedPositions[key] = "left: " + (rating.score[key] + 100) / 2 + "%";
      }
    }
    return {
      detailedScore: rating.score,
      detailedColors: detailedColors,
      detailedPositions: detailedPositions
    };
  },
  preferredLocaleOfEntity: (entity, preferences) => {
    /* Fetch the preferred locale */
    let prefLocale = {};
    for (let language of preferences.preferredLanguages) {
      if (language in entity.locales) {
        prefLocale = entity.locales[language];
        break;
      }
    }
    // if no preferred locale is present, fall back to first existing locale
    if (
      Object.keys(prefLocale).length === 0 &&
      Object.keys(entity.locales).length > 0
    ) {
      // is there easier way to access object length?
      prefLocale = Object.values(entity.locales)[0];
    }
    // if still undefined, create default empty locale
    prefLocale = scolor.setDefaultIfEmpty(prefLocale);
    return prefLocale;
  },
  prepareComments: (comments, ratings, preferences, datetimeOptions) => {
    let arr = [];
    for (let comment of comments) {
      let createDate = new Date(comment.createdAt);
      let createDateInLocale = new Intl.DateTimeFormat(
        preferences.locale,
        datetimeOptions
      ).format(createDate);
      let commentRating = null;
      if ("rating" in comment) {
        let rating = ratings.filter(
          r => comment.rating === "rating-" + r.id
        )[0];
        commentRating = scolor.prepareRating(rating);
      }
      arr.push({
        id: comment.id,
        title: comment.title,
        text: comment.text,
        voteBalance: comment.weight,
        vote: 0,
        createDateUTC: "UTC timestamp: " + comment.createdAt,
        createDate: createDateInLocale,
        createUser: comment.createdBy,
        createUserURL: "/user/" + comment.createdBy,
        rating: commentRating
      });
    }
    return arr;
  },
  badge: infoCategory => {
    let badgeClass = "";
    let badgeLabel = "";
    let badgeTooltip = "";
    switch (infoCategory) {
      case "GENERAL_INFORMATION":
        badgeClass = "badge-general";
        badgeLabel = "Information";
        badgeTooltip = "General information";
        break;
      case "LIFE_CYCLE_ANALYSIS":
        badgeClass = "badge-lca";
        badgeLabel = "LCA";
        badgeTooltip = "Information from life cycle assessment";
        break;
      case "EXTERNAL_COSTS":
        badgeClass = "badge-ext";
        badgeLabel = "External cost";
        badgeTooltip = "Information from external cost calculation";
        break;
      case "REPORT":
        badgeClass = "badge-report";
        badgeLabel = "Report";
        badgeTooltip =
          "Information reported from a non-governmental or governmental organization";
        break;
      case "PAPER":
        badgeClass = "badge-paper";
        badgeLabel = "Paper";
        badgeTooltip = "Information from scientific article";
        break;
      case "MEDIA":
        badgeClass = "badge-media";
        badgeLabel = "Media";
        badgeTooltip = "Information from media coverage, e.g. press article";
        break;
      case "INVESTIGATIVE_REPORT":
        badgeClass = "badge-investigative";
        badgeLabel = "Investigative";
        badgeTooltip = "Information from investigative article or report";
        break;
      case "CORPORATE_SOCIAL_RESPONSIBILITY":
        badgeClass = "badge-csr";
        badgeLabel = "CSR";
        badgeTooltip =
          "Information from a Corporate Social Responsibility report, i.e. from the corporation itself";
        break;
      case "JURISDICTION":
        badgeClass = "badge-juris";
        badgeLabel = "Jurisdiction";
        badgeTooltip =
          "Information from jurisdiction, e.g. a lawsuit or a sentence";
        break;
      case "OTHER":
        badgeClass = "badge-other";
        badgeLabel = "Other";
        badgeTooltip = "Other kind of information";
        break;
    }
    return [badgeClass, badgeLabel, badgeTooltip];
  }
};

export default scolor;
