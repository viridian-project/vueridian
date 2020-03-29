<template>
  <div id="app">
    <Header />
    <div id="main-content">
      <router-view />
    </div>
    <footer>
      <p>Copyright 2019 The Viridian Project</p>
    </footer>
  </div>
</template>

<style src="@/assets/css/main.css"></style>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
