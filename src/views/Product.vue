<template>
  <div id="page">
    <HeaderProduct />
    <div id="main-content">
      <section class="home">
        <img
          alt="Viridian logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <h1>
          Products: Information and Rating
        </h1>
        <p>
          You can click on the
          <strong>Search</strong> button in the upper right and then on
          <strong>Search by Product Name</strong>.
        </p>
        <h3>Please note:</h3>
        <p>
          So far, only one search for <code>chocolate spread</code>
          is implemented in this mockup. Other product searches, searching by
          barcode and searches for labels or companies are not implemented yet
          (but are of course all planned and useful).
        </p>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProduct from "@/components/headers/HeaderProduct.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Product",
  components: {
    HeaderProduct,
    Footer
  }
};
</script>
