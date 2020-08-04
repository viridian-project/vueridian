<template>
  <div id="page">
    <HeaderNonProduct type="company" />
    <div id="main-content">
      <section>
        <h3>Oh no!</h3>
        <p>
          This part of the mockup has not been implemented yet... 😞
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
import HeaderNonProduct from "@/components/headers/HeaderNonProduct.vue";
import Footer from "@/components/Footer.vue";
// import ScoreBar from "@/components/widgets/ScoreBar.vue";
// import HovercardScore from "@/components/widgets/HovercardScore.vue";

// import preferences from "@/assets/data/preferences.js";
// import productSearchResults from "@/assets/data/products.js";
// import scolor from "@/assets/js/score-color.js";

export default {
  name: "CompanySearch",
  components: {
    HeaderNonProduct,
    Footer
    // ScoreBar,
    // HovercardScore
  }
  //   data: function() {
  //     return {
  //       labels: labels
  //     };
  //   }
};
</script>
