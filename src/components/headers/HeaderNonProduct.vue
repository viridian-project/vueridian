<template>
  <header>
    <HeaderTopNonProduct />
    <HeaderTabs />
  </header>
</template>

<script>
// @ is an alias to /src
import HeaderTopNonProduct from "@/components/headers/HeaderTopNonProduct.vue";
import HeaderTabs from "@/components/headers/HeaderTabs.vue";

export default {
  name: "HeaderNonProduct",
  components: {
    HeaderTopNonProduct,
    HeaderTabs
  }
};
</script>
