<template>
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
</template>

<style scoped>
/*
* Github style hovercard (https://time2hack.com/jquery-tutorial-build-hovercards-for-your-website/)
*/
.hovercard {
  display: none;
  position: absolute;
  width: 200px;
  max-width: 75%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 4px;
  font-size: 0.9em;
  /* render hovercard on top: */
  z-index: 1000;
}

@media (max-width: 535px) {
  .hovercard {
    font-size: 0.8em;
  }
}

.hovercard::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 48px;
  border-bottom: 12px solid #aaa;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.hovercard::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50px;
  border-bottom: 10px solid #fff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.hovercard-above::before {
  top: 100%;
  border-top: 12px solid #aaa;
  border-bottom: none;
}

.hovercard-above::after {
  top: 100%;
  border-top: 10px solid #fff;
  border-bottom: none;
}

.hovercard-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
}

@media (max-width: 535px) {
  .hovercard::before {
    left: 33px;
  }
  .hovercard::after {
    left: 35px;
  }
}

.hovercard-info {
  width: 300px;
  font-weight: normal;
}

.hovercard-info::after {
  left: 27px;
}

.hovercard-info::before {
  left: 25px;
}
</style>

<script>
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
export default {
  name: "Hovercard",
  props: {
    entity: {},
    screen: {
      default: "",
      type: String
    }
  },
  components: {
    ScoreBlob
  }
};
</script>
