<template>
  <div class="detail-img">
    <div v-bind:style="prod.imgStyle"></div>
  </div>
</template>

<style scoped>
.detail-img > div {
  width: 250px;
  height: 250px;
  border-radius: 125px;
  border: 1px solid;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 768px) {
  .detail-img > div {
    width: 170px;
    height: 170px;
    border-radius: 85px;
  }
}
</style>

<script>
export default {
  props: ["prod"]
};
</script>
