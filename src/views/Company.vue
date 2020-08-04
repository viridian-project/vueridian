<template>
  <div id="page">
    <HeaderNonProduct type="company" />
    <div id="main-content">
      <section class="home">
        <img
          alt="Viridian logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <h1>
          Companies: Information and Rating
        </h1>
        <h3>Oh no!</h3>
        <p>
          This part of the mockup has not been implemented yet... 😞
        </p>
        <p>
          Searches for companies are not implemented yet in this mockup (but
          it's of course planned and useful). Only product search has been
          implemented. Click on <strong>Products</strong> to search for products
          instead.
        </p>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNonProduct from "@/components/headers/HeaderNonProduct.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Company",
  components: {
    HeaderNonProduct,
    Footer
  }
};
</script>
