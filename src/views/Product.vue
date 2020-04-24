<template>
  <div id="page">
    <HeaderProduct />
    <div id="main-content">
      <div class="home">
        <img
          alt="Viridian logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <h1>
          Products Information and Rating
        </h1>
        <h3>
          Use the search button in the upper right to search for products.
        </h3>
      </div>
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
