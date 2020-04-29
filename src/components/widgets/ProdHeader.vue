<template>
  <div class="detail-header">
    <h1 v-bind:title="prod.name">{{ prod.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["prod"]
};
</script>
