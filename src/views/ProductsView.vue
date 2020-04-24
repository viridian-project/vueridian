<template>
  <div id="page">
    <HeaderProducts />
    <div id="main-content">
      <h2 class="results-heading">
        Product: <code>{{ id }}</code>
      </h2>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderProducts from "@/components/headers/HeaderProducts.vue";
import Footer from "@/components/Footer.vue";

/*************
 * Load data *
 *************/
import preferences from "@/assets/data/preferences.js";
import productSearchResults from "@/assets/data/products.js";
// import scolor from "@/assets/js/score-color.js";

// console.log(this.$route);
// let prod_id = this.$route.query.id;
// console.log(prod_id);
console.log(preferences);
console.log(productSearchResults);

export default {
  name: "ProductsView",
  components: {
    HeaderProducts,
    Footer
  },
  data: function() {
    return {
      id: this.$route.query.id
    }
  }
};
</script>
