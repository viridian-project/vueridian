<template>
  <div class="detail-score">
    <h4>Detailed Score:</h4>
    <ScoreTable :entity="prod" />
  </div>
</template>

<style scoped>
.detail-score {
  margin-bottom: 16px;
}
</style>

<script>
import ScoreTable from "@/components/widgets/ScoreTable.vue";

export default {
  props: ["prod"],
  components: {
    ScoreTable
  }
};
</script>
