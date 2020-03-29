<template>
  <div id="page">
    <HeaderProducts />
    <div id="main-content">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProducts from "@/components/headers/HeaderProducts.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderProducts,
    HelloWorld,
    Footer
  }
};
</script>
