<template>
  <div id="page">
    <HeaderProduct />
    <div id="main-content">
      <section id="detail-overview">
        <div id="detail-overview-large" class="detail-box">
          <div class="detail-left-col">
            <ProdImg :prod="prod" />
            <ProdData :prod="prod" />
            <EntityCreated :entity="prod" />
          </div>
          <div class="detail-right-col">
            <ProdHeader :prod="prod" />
            <ProdDesc :prod="prod" />
            <ProdDetailed :prod="prod" />
            <ProdInherited
              screen="wide"
              :producers="producers"
              :labels="labels"
              :product-categories="productCategories"
              :contained-products="containedProducts"
            />
          </div>
        </div>
        <div id="detail-overview-small" class="detail-box">
          <ProdHeader :prod="prod" />
          <ProdImg :prod="prod" />
          <ProdDesc :prod="prod" />
          <ProdData :prod="prod" />
          <ProdDetailed :prod="prod" />
          <ProdInherited
            screen="narrow"
            :producers="producers"
            :labels="labels"
            :product-categories="productCategories"
            :contained-products="containedProducts"
          />
          <EntityCreated :entity="prod" />
        </div>
      </section>
      <section id="detail-comments" v-if="commentsAll.length > 0">
        <div class="detail-box">
          <h2>General comments on the product:</h2>
          <Comments :comments="commentsPref" class="large-comments-container" />
          <div v-if="commentsUnpref.length > 0">
            <h3>Comments in other languages:</h3>
            <Comments
              :comments="commentsUnpref"
              class="large-comments-container"
            />
          </div>
        </div>
      </section>
      <section id="detail-infos">
        <div class="button">+ Add information</div>
        <div class="detail-box">
          <h2>The product score is based on these ratings:</h2>
          <div id="detail-info-container">
            <article v-for="info in informations" :key="info.id">
              <div class="info-vote-and-text">
                <VoteWedges :entity="info" />
                <div>
                  <h3>
                    {{ info.title }}
                    <span
                      class="info-badge"
                      :class="info.badgeClass"
                      :title="info.badgeTooltip"
                      >{{ info.badgeLabel }}</span
                    >
                  </h3>
                  <p v-html="info.description"></p>
                </div>
              </div>
              <div class="info-sources-and-users">
                <div class="info-sources">
                  <div v-if="info.sources.length > 0">
                    <strong v-if="info.sources.length > 1">Sources:</strong>
                    <strong v-else>Source:</strong>
                    <ul>
                      <li v-for="source in info.sources" :key="source.id">
                        <span
                          v-if="
                            'authors' in source && source.authors.length > 0
                          "
                        >
                          <a :href="source.url">{{ source.title }}</a
                          >, ({{ source.authors.join(", ") }}) –
                        </span>
                        <span v-else>
                          <a :href="source.url">{{ source.title }}</a> –
                        </span>
                        accessed
                        <span class="date">{{ source.accessDate }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="info-users">
                  <EntityCreated :entity="info" />
                </div>
              </div>
              <div v-if="info.rating" class="info-ratings">
                <h4>Suggested Rating:</h4>
                <div
                  class="rating"
                  :class="{ negative: info.rating.voteBalance < 0 }"
                >
                  <div class="column">
                    <ScoreTable :entity="info.rating" />
                  </div>
                </div>
              </div>
              <div
                v-if="info.commentsPref.length + info.commentsUnpref.length > 0"
              >
                <div class="separator"></div>
                <div class="info-comments">
                  <h4>Comments:</h4>
                  <Comments :comments="info.commentsPref" :indented="true" />
                  <div v-if="info.commentsUnpref.length > 0">
                    <h4>Comments in other languages:</h4>
                    <Comments
                      :comments="info.commentsUnpref"
                      :indented="true"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <p>
          Product images are based on an
          <a
            href="http://mikimotoangel.blogspot.com/2011/04/gastronomy-sweet-tooth.html"
            >image by Katrina Angela Castro (download on 2020-03-26)</a
          >, licensed under a
          <a href="https://creativecommons.org/licenses/by/3.0/ph/"
            >Creative Commons Attribution 3.0 Philippines License</a
          >, which has been modified (replaced labels and changed lid color).
        </p>
      </section>
    </div>
    <Footer />
  </div>
</template>

<style src="@/assets/css/comments-ratings.css"></style>
<style src="@/assets/css/info-badges.css"></style>

<style>
h1 {
  font-size: 2em;
  margin: 0;
}
@media (max-width: 768px) {
  h1 {
    margin-bottom: 16px;
  }
}

h2 {
  font-size: 1.625em;
}

h3 {
  font-size: 1.375em;
}

.detail-data {
  margin-bottom: 8px;
}

.detail-data-text {
  font-weight: bold;
  white-space: nowrap;
}
</style>

<style scoped>
.detail-box {
  margin: 16px;
  padding: 16px;
  border: 1px solid;
  box-shadow: 0px 20px 22px -15px black;
  background-color: #fefefe;
}

.detail-box > h2 {
  margin-top: 6px;
}

#detail-overview-large {
  display: flex;
}

#detail-overview-small {
  display: none;
  flex-direction: column;
}

.detail-left-col {
  width: 268px;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
}

.detail-right-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #c1c1c1;
  padding-left: 16px;
}

@media (max-width: 768px) {
  .detail-left-col {
    width: 188px;
  }
}

@media (max-width: 590px) {
  #detail-overview-large {
    display: none;
  }
  #detail-overview-small {
    display: flex;
  }
}
</style>

<script>
/*******************
 * Load components *
 *******************/
import HeaderProduct from "@/components/headers/HeaderProduct.vue";
import ProdHeader from "@/components/widgets/ProdHeader.vue";
import ProdImg from "@/components/widgets/ProdImg.vue";
import ProdDesc from "@/components/widgets/ProdDesc.vue";
import ProdData from "@/components/widgets/ProdData.vue";
import ProdDetailed from "@/components/widgets/ProdDetailed.vue";
import ProdInherited from "@/components/widgets/ProdInherited.vue";
import EntityCreated from "@/components/widgets/EntityCreated.vue";
import Comments from "@/components/widgets/Comments.vue";
import VoteWedges from "@/components/widgets/VoteWedges.vue";
import ScoreTable from "@/components/widgets/ScoreTable.vue";
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
import users from "@/assets/data/users.js";

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
    ProdHeader,
    ProdImg,
    ProdDesc,
    ProdData,
    ProdDetailed,
    ProdInherited,
    EntityCreated,
    Comments,
    VoteWedges,
    ScoreTable,
    Footer
  },
  computed: {
    id: function() {
      return this.$route.params.id;
    },
    product: function() {
      /* This would be a DB query for the product in reality: */
      let prod = productSearchResults.filter(p => p.id === this.id)[0];
      return prod;
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
      /* This would be a DB query for the user info in reality: */
      let user = users.filter(u => u.name === this.product.createdBy)[0];
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
        createUserAvatar: user.avatarUrl,
        createUserReputation: user.reputation,
        createUserURL: "/user/" + this.product.createdBy
      };
    },
    productCategories: () => [],
    containedProducts: () => [],
    producers: function() {
      /* This would be a DB query for the producers in reality: */
      let myProducers = producers.filter(
        p => this.product.producers.indexOf(p.id) >= 0
      );
      let prdcrs = [];
      for (let producer of myProducers) {
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
      /* This would be a DB query for the labels in reality: */
      let myLabels = labels.filter(l => this.product.labels.indexOf(l.id) >= 0);
      let labs = [];
      for (let lab of myLabels) {
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
    commentsAll: function() {
      /* This would be a DB query for the comments in reality: */
      let allComments = commentsProduct.filter(
        comment => comment.target === "product-" + this.id
      );
      return allComments;
    },
    commentsPref: function() {
      /* INFO: This code may be unnecessary if we perform DB queries that do the selection and sorting for us */
      /* Show comments in one of the user's preferred languages first: */
      let prefComments = this.commentsAll.filter(
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
      let unprefComments = this.commentsAll.filter(
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
      /* This would be a DB query for the informations in reality: */
      let myInformations = informations.filter(
        i => i.target === "product-" + this.id
      );
      let infos = [];
      for (let info of myInformations) {
        /* Fetch the preferred locale */
        let prefLocale = scolor.preferredLocaleOfEntity(info, preferences);
        let sources = [];
        if ("sources" in info) {
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
        /* This would be a DB query for the comments in reality: */
        let allComments = commentsInformations.filter(
          comment => comment.target === "information-" + info.id
        );
        /* INFO: This code may be unnecessary if we perform DB queries that do the selection and sorting for us */
        /* Show comments belonging to this information in one of the user's preferred languages first: */
        let prefComments = allComments.filter(
          comment => preferences.preferredLanguages.indexOf(comment.lang) >= 0
        ); // comments in preferred languages
        let unprefComments = allComments.filter(
          comment => preferences.preferredLanguages.indexOf(comment.lang) < 0
        ); // comments in "unpreferred" languages
        /* Sort comments by weight in descending order: */
        prefComments.sort((a, b) => b.weight - a.weight);
        unprefComments.sort((a, b) => b.weight - a.weight);
        let infoCommentsPref = scolor.prepareComments(
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
        /* This would be a DB query for the user info in reality: */
        let user = users.filter(u => u.name === info.createdBy)[0];
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
          createUserAvatar: user.avatarUrl,
          createUserReputation: user.reputation,
          createUserURL: "/user/" + info.createdBy,
          rating: infoRating,
          commentsPref: infoCommentsPref,
          commentsUnpref: infoCommentsUnpref
        });
      }
      return infos;
    }
  }
};
</script>
