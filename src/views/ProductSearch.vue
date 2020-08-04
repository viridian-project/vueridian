<template>
  <div id="page">
    <HeaderProduct />
    <div id="main-content">
      <h2 class="results-heading">
        Search results for: <code>{{ $route.params.q }}</code>
      </h2>
      <section id="cards">
        <article v-for="prod in products" :key="prod.id">
          <div class="card-img">
            <router-link :to="prod.url">
              <div v-bind:style="prod.imgStyle"></div>
            </router-link>
          </div>
          <div class="card-header">
            <h2 v-bind:title="prod.name">
              <router-link :to="prod.url">{{ prod.name }}</router-link>
            </h2>
          </div>
          <div class="card-quant" v-bind:title="prod.quant">
            {{ prod.quant }}
          </div>
          <div class="card-desc" v-bind:title="prod.desc">
            <router-link :to="prod.url">
              {{ prod.desc }}
            </router-link>
          </div>
          <div class="card-score">
            <div class="card-score-text">
              <p>Score:</p>
            </div>
            <!-- Hovercard with details on the product score: -->
            <HovercardScore :entity="prod" />
            <ScoreBar
              class="card-score-bar card-score-bar-regular"
              :position="prod.position"
              :has-labels="true"
            />
          </div>
          <div class="card-price" v-bind:title="prod.priceCurr">
            {{ prod.priceCurr }}
          </div>
          <ScoreBar
            class="card-score-bar card-score-bar-tiny-screens"
            :position="prod.position"
            :has-labels="true"
          />
        </article>
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

<style src="@/assets/css/cards.css"></style>

<style scoped>
h2.results-heading {
  padding: 0 10px;
}
</style>

<script>
// @ is an alias to /src
import HeaderProduct from "@/components/headers/HeaderProduct.vue";
import Footer from "@/components/Footer.vue";
import ScoreBar from "@/components/widgets/ScoreBar.vue";
import HovercardScore from "@/components/widgets/HovercardScore.vue";

import preferences from "@/assets/data/preferences.js";
import productSearchResults from "@/assets/data/products.js";
import scolor from "@/assets/js/score-color.js";

/* Build the products object based on preferences */
let products = [];
for (let product of productSearchResults) {
  /* Fetch the preferred locale */
  let prefLocale = {};
  for (let lang of preferences.preferredLanguages) {
    if (lang in product.locales) {
      prefLocale = product.locales[lang];
      break;
    }
  }
  // if no preferred locale is not present, fall back to first existing locale
  if (
    Object.keys(prefLocale).length == 0 &&
    Object.keys(product.locales).length > 0
  ) {
    // is there easier way to access object length?
    prefLocale = Object.values(product.locales)[0];
  }
  // if still undefined, create default empty locale
  prefLocale = scolor.setDefaultIfEmpty(prefLocale);
  let score = scolor.calcTotalScore(product.score, preferences.scoreWeighting);
  let color = scolor.calcScoreColor(score);
  let detailedColors = {};
  let detailedPositions = {};
  for (let key in product.score) {
    let c = scolor.calcScoreColor(product.score[key]);
    detailedColors[key] =
      "background-color: rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ");";
    detailedPositions[key] = "left: " + (product.score[key] + 100) / 2 + "%";
  }
  products.push({
    id: product.id,
    name: prefLocale.name,
    desc: prefLocale.description,
    quant: prefLocale.quantities[0],
    price: prefLocale.price,
    curr: prefLocale.currency,
    priceCurr: scolor.concatPriceAndCurrency(
      prefLocale.price,
      prefLocale.currency,
      preferences["preferredLang"]
    ),
    imgStyle: 'background-image: url("' + prefLocale.imageUrls[0] + '");',
    score: score,
    color:
      "background-color: rgb(" +
      color[0] +
      ", " +
      color[1] +
      ", " +
      color[2] +
      ");",
    position: "left: " + (score + 100) / 2 + "%",
    detailedScore: product.score,
    detailedColors: detailedColors,
    detailedPositions: detailedPositions,
    url: "/product/" + product.id
  });
}
let maxPriceLength = 0;
for (let p of products) {
  if (p.priceCurr.length > maxPriceLength) {
    maxPriceLength = p.priceCurr.length;
  }
}
if (maxPriceLength > 9) {
  document.getElementById("cards").classList.add("price-10-chars");
} else if (maxPriceLength > 8) {
  document.getElementById("cards").classList.add("price-9-chars");
} else if (maxPriceLength > 7) {
  document.getElementById("cards").classList.add("price-8-chars");
}

export default {
  name: "ProductsSearch",
  components: {
    HeaderProduct,
    Footer,
    ScoreBar,
    HovercardScore
  },
  data: function() {
    return {
      products: products
    };
  }
};
</script>
