<template>
  <div class="hovercard-container">
    <img
      v-bind:id="'info-' + id"
      class="info-icon"
      src="@/assets/icons/ionicons/md-information-circle.svg"
      alt="information"
      v-on:click="
        placeInfoHovercard('info-hovercard-' + id, 'info-' + id, 'click')
      "
      v-on:touchend="
        placeInfoHovercard('info-hovercard-' + id, 'info-' + id, 'click')
      "
      v-on:mouseover="
        placeInfoHovercard('info-hovercard-' + id, 'info-' + id, 'mouseover')
      "
      v-on:mouseout="
        placeInfoHovercard('info-hovercard-' + id, 'info-' + id, 'mouseout')
      "
    />
    <div
      v-bind:id="'info-hovercard-' + id"
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
.info-icon {
  width: 25px;
  position: absolute;
  top: -10px;
  left: 15px;
  cursor: pointer;
}

.hovercard {
  width: 300px;
  font-weight: normal;
}

.hovercard-above {
  bottom: 20px;
}

.hovercard-below {
  top: 25px;
}

.hovercard::before {
  left: 15px;
}

.hovercard::after {
  left: 17px;
}
</style>

<script>
import hcard from "@/assets/js/hovercard.js"; // load shared hovercard placement code
export default {
  name: "HovercardInfo",
  props: ["id"],
  methods: {
    placeInfoHovercard: hcard.placeHovercard(function(
      windowHeight,
      hcardHeight,
      rectTop
    ) {
      let above = true;
      if (rectTop < 100 + hcardHeight + 20) {
        // 100px is header height, add 20px extra space
        above = false;
      }
      return above;
    })
  }
};
</script>
