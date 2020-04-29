<template>
  <table class="score-table">
    <tbody>
      <tr v-if="'environment' in entity.detailedColors">
        <td class="detail-score-label">Environment:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.environment"
            v-bind:score="entity.detailedScore.environment"
            v-bind:text="entity.detailedScore.environment"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar :position="entity.detailedPositions.environment" />
        </td>
      </tr>
      <tr v-if="'climate' in entity.detailedColors">
        <td class="detail-score-label">Climate:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.climate"
            v-bind:score="entity.detailedScore.climate"
            v-bind:text="entity.detailedScore.climate"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar :position="entity.detailedPositions.climate" />
        </td>
      </tr>
      <tr v-if="'society' in entity.detailedColors">
        <td class="detail-score-label">Society:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.society"
            v-bind:score="entity.detailedScore.society"
            v-bind:text="entity.detailedScore.society"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar :position="entity.detailedPositions.society" />
        </td>
      </tr>
      <tr v-if="'health' in entity.detailedColors">
        <td class="detail-score-label">Health:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.health"
            v-bind:score="entity.detailedScore.health"
            v-bind:text="entity.detailedScore.health"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar :position="entity.detailedPositions.health" />
        </td>
      </tr>
      <tr v-if="'animalWelfare' in entity.detailedColors">
        <td class="detail-score-label">Animal welfare:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.animalWelfare"
            v-bind:score="entity.detailedScore.animalWelfare"
            v-bind:text="entity.detailedScore.animalWelfare"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar :position="entity.detailedPositions.animalWelfare" />
        </td>
      </tr>
      <tr v-if="'economy' in entity.detailedColors">
        <td class="detail-score-label">Economy:</td>
        <td class="detail-score-blob">
          <ScoreBlob
            class="score-blob-small"
            v-bind:color="entity.detailedColors.economy"
            v-bind:score="entity.detailedScore.economy"
            v-bind:text="entity.detailedScore.economy"
          />
        </td>
        <td class="detail-score-bar">
          <ScoreBar
            :position="entity.detailedPositions.economy"
            :has-labels="true"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
import ScoreBar from "@/components/widgets/ScoreBar.vue";

export default {
  props: ["entity"],
  components: {
    ScoreBlob,
    ScoreBar
  }
};
</script>
