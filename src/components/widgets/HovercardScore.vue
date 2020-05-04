<template>
  <div class="hovercard-container">
    <div
      class="total-score-blob detail-data-text noselect pointer"
      v-on:click="
        placeScoreHovercard(
          'hovercard-' + screen + '-' + entity.id,
          'blob-' + screen + '-' + entity.id,
          'click'
        )
      "
      v-on:touchend="
        placeScoreHovercard(
          'hovercard-' + screen + '-' + entity.id,
          'blob-' + screen + '-' + entity.id,
          'click'
        )
      "
      v-on:mouseover="
        placeScoreHovercard(
          'hovercard-' + screen + '-' + entity.id,
          'blob-' + screen + '-' + entity.id,
          'mouseover'
        )
      "
      v-on:mouseout="
        placeScoreHovercard(
          'hovercard-' + screen + '-' + entity.id,
          'blob-' + screen + '-' + entity.id,
          'mouseout'
        )
      "
    >
      <ScoreBlob
        v-bind:id="'blob-' + screen + '-' + entity.id"
        v-bind:color="entity.color"
        v-bind:score="entity.score"
        v-bind:text="entity.score"
      />
    </div>
    <div
      :id="'hovercard-' + screen + '-' + entity.id"
      class="hovercard"
      style="display: none;"
      data-permanent="false"
    >
      <div class="hovercard-row">
        <div>Environment:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.environment"
          v-bind:score="entity.detailedScore.environment"
          v-bind:text="entity.detailedScore.environment"
        />
      </div>
      <div class="hovercard-row">
        <div>Climate:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.climate"
          v-bind:score="entity.detailedScore.climate"
          v-bind:text="entity.detailedScore.climate"
        />
      </div>
      <div class="hovercard-row">
        <div>Society:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.society"
          v-bind:score="entity.detailedScore.society"
          v-bind:text="entity.detailedScore.society"
        />
      </div>
      <div class="hovercard-row">
        <div>Health:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.health"
          v-bind:score="entity.detailedScore.health"
          v-bind:text="entity.detailedScore.health"
        />
      </div>
      <div class="hovercard-row">
        <div>Animal welfare:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.animalWelfare"
          v-bind:score="entity.detailedScore.animalWelfare"
          v-bind:text="entity.detailedScore.animalWelfare"
        />
      </div>
      <div class="hovercard-row">
        <div>Economy:</div>
        <ScoreBlob
          class="score-blob-small"
          v-bind:color="entity.detailedColors.economy"
          v-bind:score="entity.detailedScore.economy"
          v-bind:text="entity.detailedScore.economy"
        />
      </div>
    </div>
  </div>
</template>

<style src="@/assets/css/hovercard.css"></style>

<style scoped>
.hovercard {
  width: 200px;
  left: -20px;
}

.hovercard-above {
  bottom: 50px;
}

.hovercard-below {
  top: 50px;
}

/* arrow position: */
.hovercard::before {
  left: 28px;
}

.hovercard::after {
  left: 30px;
}

@media (max-width: 535px) {
  .hovercard-above {
    bottom: 40px;
  }
  .hovercard-below {
    top: 40px;
  }
  /* arrow position: */
  .hovercard::before {
    left: 23px;
  }
  .hovercard::after {
    left: 25px;
  }
}

.total-score-blob {
  font-size: 0.9em;
}

@media (max-width: 535px) {
  .total-score-blob {
    font-size: 0.8em;
  }
}

.hovercard-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>

<script>
import hcard from "@/assets/js/hovercard.js"; // load shared hovercard placement code
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
export default {
  name: "HovercardScore",
  props: {
    entity: {},
    screen: {
      default: "",
      type: String
    }
  },
  components: {
    ScoreBlob
  },
  methods: {
    placeScoreHovercard: hcard.placeHovercard(function(
      windowHeight,
      hcardHeight,
      rectTop
    ) {
      let above = false;
      if (windowHeight - rectTop - 102 < hcardHeight) {
        // 80px space for footer, 22px is padding and borders
        above = true;
      }
      return above;
    })
  }
};
</script>
