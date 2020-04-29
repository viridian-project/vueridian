<template>
  <div>
    <div class="score-bar">
      <div class="score-bar-tick score-bar-tick-minusseventyfive"></div>
      <div class="score-bar-tick score-bar-tick-minusfifty"></div>
      <div class="score-bar-tick score-bar-tick-minustwentyfive"></div>
      <div class="score-bar-tick score-bar-tick-zero"></div>
      <div class="score-bar-tick score-bar-tick-twentyfive"></div>
      <div class="score-bar-tick score-bar-tick-fifty"></div>
      <div class="score-bar-tick score-bar-tick-seventyfive"></div>
      <div class="score-blob-gray" :style="position"></div>
    </div>
    <div v-if="hasLabels" class="score-bar-label-row">
      <span class="score-bar-label score-bar-label-min">-100</span>
      <span class="score-bar-label score-bar-label-zero">0</span>
      <span class="score-bar-label score-bar-label-max">100</span>
    </div>
  </div>
</template>

<style scoped>
.score-bar {
  width: 100%;
  height: 16px;
  background-image: linear-gradient(90deg, #ff0000, #ffff00, #008000);
  /* (same as green, yellow, red) */
  border: 1px solid gray;
  display: inline-block;
  vertical-align: middle;
  /* parent (=score-bar) position relative means absolute position of child (=score-bar-tick) will be relative to parent */
  position: relative;
}

.score-bar-tick {
  width: 2px;
  background-color: rgb(100, 100, 100);
  /* border: 1px solid white; */
  /* border-bottom: none; */
  margin-left: -2px;
  /* parent (=score-bar) position relative means absolute position of child (=score-bar-tick) will be relative to parent */
  position: absolute;
  bottom: 0;
}

.score-bar-tick-minusseventyfive {
  height: 5px;
  left: 12.5%;
}

.score-bar-tick-minusfifty {
  height: 7px;
  left: 25%;
}

.score-bar-tick-minustwentyfive {
  height: 5px;
  left: 37.5%;
}

.score-bar-tick-zero {
  height: 10px;
  left: 50%;
}

.score-bar-tick-twentyfive {
  height: 5px;
  left: 62.5%;
}

.score-bar-tick-fifty {
  height: 7px;
  left: 75%;
}

.score-bar-tick-seventyfive {
  height: 5px;
  left: 87.5%;
}

.score-blob-gray {
  width: 24px;
  height: 24px;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: gray;
  margin-left: -12px;
  /* parent (=score-bar) position relative means absolute position of child (=score-blob-gray) will be relative to parent */
  position: absolute;
  top: -5px;
  /* left: 50%; */
}

.score-bar-label-row {
  /* parent (=score-bar-label-row) position relative means absolute position of child (=score-bar-label) will be relative to parent */
  position: relative;
  /* border needed for positions to align, because score bar also has border, which makes it a bit wider */
  border-left: 1px solid;
  border-right: 1px solid;
  margin-bottom: 16px;
}

.score-bar-label {
  font-weight: bold;
  font-size: 0.9em;
  width: 40px;
  margin-left: -20px;
  /* parent (=score-bar-label-row) position relative means absolute position of child (=score-bar-label) will be relative to parent */
  position: absolute;
  text-align: center;
}

.score-bar-label-min {
  left: 0%;
}

.score-bar-label-zero {
  left: 50%;
}

.score-bar-label-max {
  left: 100%;
}

@media (max-width: 535px) {
  .score-bar-label {
    font-size: 0.8em;
  }
  .score-bar {
    height: 12px;
  }
  .score-blob-gray {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-left: -10px;
  }
}
</style>

<script>
export default {
  name: "ScoreBar",
  props: {
    position: {},
    "has-labels": {
      default: false,
      type: Boolean
    }
  }
};
</script>
