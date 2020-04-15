<template>
  <div id="page">
    <HeaderProducts />
    <div id="main-content">
      <div class="home">
        <img
          alt="Vue logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <h1>Products Information and Rating</h1>
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
import HeaderProducts from "@/components/headers/HeaderProducts.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderProducts,
    Footer
  }
};
</script>

<style scoped>
.home {
  margin-top: 40px;
}
.home > img {
  width: 80%;
}
</style>
