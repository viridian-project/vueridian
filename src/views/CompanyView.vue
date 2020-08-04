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

<style src="@/assets/css/comments-ratings.css"></style>
<style src="@/assets/css/info-badges.css"></style>

<script>
/*******************
 * Load components *
 *******************/
import HeaderNonProduct from "@/components/headers/HeaderNonProduct.vue";
// import EntityCreated from "@/components/widgets/EntityCreated.vue";
// import Comments from "@/components/widgets/Comments.vue";
// import VoteWedges from "@/components/widgets/VoteWedges.vue";
// import ScoreTable from "@/components/widgets/ScoreTable.vue";
import Footer from "@/components/Footer.vue";

/******************
 * Load functions *
 ******************/
// import scolor from "@/assets/js/score-color.js";

/*************
 * Load data *
 *************/
/* In the completed app, these will be loaded from the distributed
   database/blockchain */
// import preferences from "@/assets/data/preferences.js";
// import productSearchResults from "@/assets/data/products.js";
// import producers from "@/assets/data/producers.js";
// import labels from "@/assets/data/labels.js";
// import scoreInheritance from "@/assets/data/score-inheritance.js";
// import commentsProduct from "@/assets/data/comments-product.js";
// import informations from "@/assets/data/informations.js";
// import ratings from "@/assets/data/ratings.js";
// import commentsInformations from "@/assets/data/comments-informations.js";
// import users from "@/assets/data/users.js";

/******************
 * Global options *
 ******************/
// let datetimeOptions = {
//   year: "numeric", // or: '2-digit',
//   month: "short",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric"
// };
// let dateOptions = {
//   year: "numeric", // or: '2-digit',
//   month: "short",
//   day: "numeric"
// };

export default {
  name: "CompanyView",
  components: {
    HeaderNonProduct,
    // EntityCreated,
    // Comments,
    // VoteWedges,
    // ScoreTable,
    Footer
  }
};
</script>
