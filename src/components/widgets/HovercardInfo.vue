<template>
  <div>
    <img
      v-bind:id="'info-' + screen + '-' + infoId"
      class="vote-info"
      src="@/assets/icons/ionicons/md-information-circle.svg"
      alt="information"
      v-on:click="
        placeInfoHovercard(
          'info-hovercard-' + screen + '-' + infoId,
          'info-' + screen + '-' + infoId,
          'click'
        )
      "
      v-on:touchend="
        placeInfoHovercard(
          'info-hovercard-' + screen + '-' + infoId,
          'info-' + screen + '-' + infoId,
          'click'
        )
      "
      v-on:mouseover="
        placeInfoHovercard(
          'info-hovercard-' + screen + '-' + infoId,
          'info-' + screen + '-' + infoId,
          'mouseover'
        )
      "
      v-on:mouseout="
        placeInfoHovercard(
          'info-hovercard-' + screen + '-' + infoId,
          'info-' + screen + '-' + infoId,
          'mouseout'
        )
      "
    />
    <div
      v-bind:id="'info-hovercard-' + screen + '-' + infoId"
      class="hovercard hovercard-info"
      style="display: none;"
      data-permanent="false"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style src="@/assets/css/hovercard.css"></style>

<style scoped>
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
import hcard from "@/assets/js/hovercard.js"; // load shared hovercard placement code
export default {
  name: "HovercardInfo",
  props: {
    "info-id": {},
    screen: {
      default: "",
      type: String
    }
  },
  methods: {
    placeInfoHovercard: hcard.placeHovercard(function(windowHeight, rectTop) {
      let above = true;
      if (rectTop < 225) {
        above = false;
      }
      return above;
    })
  }
};
</script>
