<template>
  <header>
    <HeaderTopHome />
    <HeaderTabs />
  </header>
</template>

<script>
// @ is an alias to /src
import HeaderTopHome from "@/components/headers/HeaderTopHome.vue";
import HeaderTabs from "@/components/headers/HeaderTabs.vue";

export default {
  name: "HeaderHome",
  components: {
    HeaderTopHome,
    HeaderTabs
  }
};
</script>
