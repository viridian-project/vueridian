<template>
  <div class="detail-data">
    <div class="separator"></div>
    <div class="data-row score-blob-row">
      <div class="detail-data-text">Score:</div>
      <ScoreBlob
        v-bind:color="prod.color"
        v-bind:score="prod.score"
        v-bind:text="prod.score"
      />
    </div>
    <div class="total-score-bar-container">
      <div class="total-score-bar">
        <ScoreBar :position="prod.position" :has-labels="true" />
      </div>
    </div>
    <div class="separator"></div>
    <div class="data-row">
      <div class="detail-data-text">Quantity:</div>
      <div class="detail-data-text">{{ prod.quant }}</div>
    </div>
    <div class="data-row">
      <div class="detail-data-text">Price:</div>
      <div class="detail-data-text">{{ prod.priceCurr }}</div>
    </div>
  </div>
</template>

<script>
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
import ScoreBar from "@/components/widgets/ScoreBar.vue";

export default {
  props: ["prod"],
  components: {
    ScoreBlob,
    ScoreBar
  }
};
</script>
