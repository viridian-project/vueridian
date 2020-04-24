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
import HeaderProduct from "@/components/headers/HeaderProduct.vue";
import Footer from "@/components/Footer.vue";

/*************
 * Load data *
 *************/
import preferences from "@/assets/data/preferences.js";
import productSearchResults from "@/assets/data/products.js";
import scolor from "@/assets/js/score-color.js";

// console.log(this.$route);
// let prod_id = this.$route.query.id;
// console.log(prod_id);
console.log(preferences);
console.log(productSearchResults);

export default {
  name: "ProductView",
  components: {
    HeaderProduct,
    Footer
  },
  data: function() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    product: function() {
      let index = -1;
      for (let i = 0; index < 0 && i < productSearchResults.length; i++) {
        if (productSearchResults[i].id === this.id) index = i;
      }
      return productSearchResults[index];
    },
    prefLocale: function() {
      /* Fetch the preferred locale */
      let prefLocale = {};
      for (let language of preferences.preferredLanguages) {
        if (language in this.product.locales) {
          prefLocale = this.product.locales[language];
          break;
        }
      }
      // if no preferred locale is present, fall back to first existing locale
      if (Object.keys(prefLocale).length === 0 && Object.keys(this.product.locales).length > 0) { // is there easier way to access object length?
        prefLocale = Object.values(this.product.locales)[0];
      }
      // if still undefined, create default empty locale
      prefLocale = scolor.setDefaultIfEmpty(prefLocale);
      return prefLocale;
    }
  }
};
</script>
