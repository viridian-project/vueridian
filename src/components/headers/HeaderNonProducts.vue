<template>
  <header>
    <HeaderTopNonProducts />
    <HeaderTabs />
  </header>
</template>

<script>
// @ is an alias to /src
import HeaderTopNonProducts from "@/components/headers/HeaderTopNonProducts.vue";
import HeaderTabs from "@/components/headers/HeaderTabs.vue";

export default {
  name: "HeaderNonProducts",
  components: {
    HeaderTopNonProducts,
    HeaderTabs
  }
};
</script>
