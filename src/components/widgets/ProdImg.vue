<template>
  <div class="detail-img"><img v-bind:style="prod.imgStyle" /></div>
</template>

<script>
export default {
  props: ["prod"]
};
</script>
