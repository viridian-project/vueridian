<template>
  <div
    class="score-blob noselect"
    v-bind:style="color"
    v-bind:class="{ 'extreme-score': score > 50 || score < -50 }"
  >
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.score-blob {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  white-space: nowrap;
}
.score-blob-small {
  width: 30px;
  height: 30px;
  font-size: 0.9em;
}
.extreme-score {
  color: white;
}
@media (max-width: 535px) {
  .score-blob {
    width: 30px;
    height: 30px;
  }
}
</style>

<script>
export default {
  name: "ScoreBlob",
  props: ["color", "score", "text"]
};
</script>
