<template>
  <header>
    <HeaderTopProducts />
    <HeaderTabs />
  </header>
</template>

<script>
// @ is an alias to /src
import HeaderTopProducts from "@/components/headers/HeaderTopProducts.vue";
import HeaderTabs from "@/components/headers/HeaderTabs.vue";

export default {
  name: "HeaderProducts",
  components: {
    HeaderTopProducts,
    HeaderTabs
  }
};
</script>
