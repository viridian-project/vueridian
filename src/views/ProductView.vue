<template>
  <div id="page">
    <HeaderProduct />
    <div id="main-content">
      <h2 class="results-heading">
        Product: <code>{{ id }}</code>
      </h2>
    </div>
    <Footer />
  </div>
</template>

<script>
/*******************
 * Load components *
 *******************/
import HeaderProduct from "@/components/headers/HeaderProduct.vue";
import Footer from "@/components/Footer.vue";

/******************
 * Load functions *
 ******************/
import scolor from "@/assets/js/score-color.js";

/*************
 * Load data *
 *************/
/* In the completed app, these will be loaded from the distributed
   database/blockchain */
import preferences from "@/assets/data/preferences.js";
import productSearchResults from "@/assets/data/products.js";
import producers from "@/assets/data/producers.js";
import labels from "@/assets/data/labels.js";
import scoreInheritance from "@/assets/data/score-inheritance.js";
import commentsProduct from "@/assets/data/comments-product.js";
import informations from "@/assets/data/informations.js";
import ratings from "@/assets/data/ratings.js";
import commentsInformations from "@/assets/data/comments-informations.js";

/******************
 * Global options *
 ******************/
let datetimeOptions = {
  year: "numeric", // or: '2-digit',
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};
let dateOptions = {
  year: "numeric", // or: '2-digit',
  month: "short",
  day: "numeric"
};

export default {
  name: "ProductView",
  components: {
    HeaderProduct,
    Footer
  },
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    product: function() {
      let index = -1;
      for (let i = 0; index < 0 && i < productSearchResults.length; i++) {
        if (productSearchResults[i].id === this.id) index = i;
      }
      return productSearchResults[index];
    },
    score: function() {
      return scolor.calcTotalScore(
        this.product.score,
        preferences.scoreWeighting
      );
    },
    color: function() {
      return scolor.calcScoreColor(this.score);
    },
    prodRating: function() {
      return scolor.prepareRating(this.product);
    },
    createDate: function() {
      return new Date(this.product.createdAt);
    },
    createDateInLocale: function() {
      return new Intl.DateTimeFormat(
        preferences.locale,
        datetimeOptions
      ).format(this.createDate);
    },
    prod: function() {
      let prefLocale = scolor.preferredLocaleOfEntity(
        this.product,
        preferences
      );
      return {
        name: prefLocale.name,
        desc: prefLocale.description,
        quant: prefLocale.quantities[0],
        price: prefLocale.price,
        curr: prefLocale.currency,
        priceCurr: scolor.concatPriceAndCurrency(
          prefLocale.price,
          prefLocale.currency,
          preferences.locale
        ),
        imgStyle: 'background-image: url("' + prefLocale.imageUrls[0] + '");',
        score: this.score,
        color:
          "background-color: rgb(" +
          this.color[0] +
          ", " +
          this.color[1] +
          ", " +
          this.color[2] +
          ");",
        position: "left: " + (this.score + 100) / 2 + "%",
        detailedScore: this.product.score,
        detailedColors: this.prodRating.detailedColors,
        detailedPositions: this.prodRating.detailedPositions,
        createDateUTC: "UTC timestamp: " + this.product.createdAt,
        createDate: this.createDateInLocale,
        createUser: this.product.createdBy,
        createUserAvatar: "images/avatars/" + this.product.createdBy + ".png",
        createUserURL: "user.html#" + this.product.createdBy
      };
    },
    productCategories: () => [],
    containedProducts: () => [],
    producers: function() {
      let prdcrs = [];
      for (let producer of producers) {
        let prefLocale = scolor.preferredLocaleOfEntity(producer, preferences);
        let score = scolor.calcTotalScore(
          producer.score,
          preferences.scoreWeighting
        );
        let color = scolor.calcScoreColor(score);
        let producerRating = scolor.prepareRating(producer);
        let voteBalance = 0;
        for (let si of scoreInheritance) {
          if (si.source === "producer-" + producer.id) {
            voteBalance = si.weight;
            break;
          }
        }
        prdcrs.push({
          id: producer.id,
          name: prefLocale.name,
          score: score,
          voteBalance: voteBalance,
          vote: 0,
          color:
            "background-color: rgb(" +
            color[0] +
            ", " +
            color[1] +
            ", " +
            color[2] +
            ");",
          detailedScore: producer.score,
          detailedColors: producerRating.detailedColors,
          logo: prefLocale.logoUrls[0],
          url: "producer.html#" + producer.id
        });
      }
      return prdcrs;
    },
    labels: function() {
      let labs = [];
      for (let lab of labels) {
        let prefLocale = scolor.preferredLocaleOfEntity(lab, preferences);
        let score = scolor.calcTotalScore(
          lab.score,
          preferences.scoreWeighting
        );
        let color = scolor.calcScoreColor(score);
        let labRating = scolor.prepareRating(lab);
        let voteBalance = 0;
        for (let si of scoreInheritance) {
          if (si.source === "label-" + lab.id) {
            voteBalance = si.weight;
            break;
          }
        }
        labs.push({
          id: lab.id,
          name: prefLocale.name,
          score: score,
          voteBalance: voteBalance,
          vote: 0,
          color:
            "background-color: rgb(" +
            color[0] +
            ", " +
            color[1] +
            ", " +
            color[2] +
            ");",
          detailedScore: lab.score,
          detailedColors: labRating.detailedColors,
          logo: prefLocale.logoUrls[0],
          url: "label.html#" + lab.id
        });
      }
      return labs;
    },
    comments: function() {
      /* INFO: This code may be unnecessary if we perform DB queries that do the selection and sorting for us */
      /* Show comments in one of the user's preferred languages first: */
      let prefComments = commentsProduct.filter(
        comment => preferences.preferredLanguages.indexOf(comment.lang) >= 0
      ); // comments in preferred languages
      /* Sort comments by weight in descending order: */
      prefComments.sort((a, b) => b.weight - a.weight);
      return scolor.prepareComments(
        prefComments,
        ratings,
        preferences,
        datetimeOptions
      );
    },
    commentsUnpref: function() {
      /* INFO: This code may be unnecessary if we perform DB queries that do the selection and sorting for us */
      /* Show comments in languages not preferred by user second: */
      let unprefComments = commentsProduct.filter(
        comment => preferences.preferredLanguages.indexOf(comment.lang) < 0
      ); // comments in "unpreferred" languages
      /* Sort comments by weight in descending order: */
      unprefComments.sort((a, b) => b.weight - a.weight);
      return scolor.prepareComments(
        unprefComments,
        ratings,
        preferences,
        datetimeOptions
      );
    },
    informations: function() {
      let infos = [];
      for (let info of informations) {
        /* Fetch the preferred locale */
        let prefLocale = scolor.preferredLocaleOfEntity(info, preferences);
        let sources = [];
        for (let source of info.sources) {
          let accessDate = new Date(source.accessDate);
          let accessDateInLocale = new Intl.DateTimeFormat(
            preferences.locale,
            dateOptions
          ).format(accessDate);
          sources.push({
            title: source.title,
            authors: source.authors,
            url: source.url,
            accessDate: accessDateInLocale
          });
        }
        let badgeClass = "";
        let badgeLabel = "";
        let badgeTooltip = "";
        let ret = scolor.badge(info.category);
        badgeClass = ret[0];
        badgeLabel = ret[1];
        badgeTooltip = ret[2];
        let infoRating = null;
        /* Filter rating belonging to this information */
        let myRatings = ratings.filter(
          rating => rating.infoTarget === "information-" + info.id
        );
        if (myRatings.length > 0) {
          let rating = myRatings[0];
          infoRating = scolor.prepareRating(rating);
        }
        /* INFO: This code may be unnecessary if we perform DB queries that do the selection and sorting for us */
        /* Show comments belonging to this information in one of the user's preferred languages first: */
        let prefComments = commentsInformations.filter(
          comment =>
            comment.target === "information-" + info.id &&
            preferences.preferredLanguages.indexOf(comment.lang) >= 0
        ); // comments in unpreferred languages
        let unprefComments = commentsInformations.filter(
          comment =>
            comment.target === "information-" + info.id &&
            preferences.preferredLanguages.indexOf(comment.lang) < 0
        ); // comments in "unpreferred" languages
        /* Sort comments by weight in descending order: */
        prefComments.sort((a, b) => b.weight - a.weight);
        unprefComments.sort((a, b) => b.weight - a.weight);
        let infoComments = scolor.prepareComments(
          prefComments,
          ratings,
          preferences,
          datetimeOptions
        );
        let infoCommentsUnpref = scolor.prepareComments(
          unprefComments,
          ratings,
          preferences,
          datetimeOptions
        );
        let createDate = new Date(info.createdAt);
        let createDateInLocale = new Intl.DateTimeFormat(
          preferences.locale,
          datetimeOptions
        ).format(createDate);
        infos.push({
          id: info.id,
          badgeClass: badgeClass,
          badgeLabel: badgeLabel,
          badgeTooltip: badgeTooltip,
          title: prefLocale.title,
          description: prefLocale.description,
          sources: sources,
          voteBalance: info.weight,
          vote: 0,
          createDateUTC: "UTC timestamp: " + info.createdAt,
          createDate: createDateInLocale,
          createUser: info.createdBy,
          createUserAvatar: "images/avatars/" + info.createdBy + ".png",
          createUserURL: "user.html#" + info.createdBy,
          rating: infoRating,
          comments: infoComments,
          commentsUnpref: infoCommentsUnpref
        });
      }
      return infos;
    }
  }
};
</script>
