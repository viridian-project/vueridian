<template>
  <div id="page">
    <HeaderNonProducts />
    <div id="main-content">
      <div class="home">
        <img
          alt="Viridian logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNonProducts from "@/components/headers/HeaderNonProducts.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderNonProducts,
    HelloWorld,
    Footer
  }
};
</script>
