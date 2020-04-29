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
              <img v-bind:style="prod.imgStyle" />
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
            <div
              class="card-score-blob noselect"
              v-on:click="placeHovercard(prod.id, 'click')"
              v-on:touchend="placeHovercard(prod.id, 'click')"
              v-on:mouseover="placeHovercard(prod.id, 'mouseover')"
              v-on:mouseout="placeHovercard(prod.id, 'mouseout')"
            >
              <ScoreBlob
                v-bind:id="'blob-' + prod.id"
                v-bind:color="prod.color"
                v-bind:score="prod.score"
                v-bind:text="prod.score"
              />
            </div>
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
          <!-- Hovercard with details on the product score: -->
          <Hovercard :entity="prod" />
        </article>
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
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
import ScoreBar from "@/components/widgets/ScoreBar.vue";
import Hovercard from "@/components/widgets/Hovercard.vue";

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
console.log(products);

export default {
  name: "ProductsSearch",
  components: {
    HeaderProduct,
    Footer,
    ScoreBlob,
    ScoreBar,
    Hovercard
  },
  data: function() {
    return {
      products: products
    };
  },
  methods: {
    placeHovercard: (id, what) => {
      let hovercard = document.getElementById("hovercard-" + id);
      let permanent = hovercard.getAttribute("data-permanent");
      let show = false;
      let hide = false;
      if (permanent == "false" && what == "mouseover") show = true;
      else if (permanent == "false" && what == "mouseout") hide = true;
      else if (permanent == "false" && what == "click") {
        hovercard.setAttribute("data-permanent", true);
        show = true;
      } else if (permanent == "true" && what == "click") {
        hovercard.setAttribute("data-permanent", false);
        show = false;
      }
      if (show) {
        let blob = document.getElementById("blob-" + id);
        let rect = blob.getBoundingClientRect();
        // let windowWidth = (window.innerWidth || document.documentElement.clientWidth ||
        //   document.body.clientWidth);
        let windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        let leftOffset = blob.clientWidth;
        let above = false;
        if (windowHeight - rect.top < 300) {
          above = true;
        }
        if (!above) {
          hovercard.classList.remove("hovercard-above");
          hovercard.style.top = rect.bottom + 10 + "px";
          hovercard.style.bottom = null;
        } else {
          hovercard.classList.add("hovercard-above");
          hovercard.style.top = null;
          hovercard.style.bottom = windowHeight - rect.top + 10 + "px";
        }
        hovercard.style.left = rect.left - leftOffset + "px";
        hovercard.style.display = "block";
      } else if (hide) {
        hovercard.style.display = "none";
      }
    }
  }
};
</script>
