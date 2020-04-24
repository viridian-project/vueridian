<template>
  <header>
    <HeaderTopProduct />
    <HeaderTabs />
  </header>
</template>

<script>
// @ is an alias to /src
import HeaderTopProduct from "@/components/headers/HeaderTopProduct.vue";
import HeaderTabs from "@/components/headers/HeaderTabs.vue";

export default {
  name: "HeaderProduct",
  components: {
    HeaderTopProduct,
    HeaderTabs
  }
};
</script>
