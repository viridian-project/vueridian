<template>
  <div class="hovercard-container">
    <div
      v-bind:id="'info-' + id"
      class="info-anything"
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
    >
      <slot name="anything"></slot>
    </div>
    <div
      v-bind:id="'info-hovercard-' + id"
      class="hovercard hovercard-info"
      style="display: none;"
      :style="cssProps"
      data-permanent="false"
    >
      <slot name="infotext"></slot>
    </div>
  </div>
</template>

<style src="@/assets/css/hovercard.css"></style>

<style scoped>
.info-anything {
  cursor: pointer;
}

.hovercard {
  width: 300px;
  left: var(--left);
  font-weight: normal;
}

.hovercard-above {
  bottom: var(--above-bottom);
}

.hovercard-below {
  top: var(--below-top);
}

.hovercard::before {
  left: var(--arrow-left);
}

.hovercard::after {
  left: var(--arrow-left-plus-two);
}
</style>

<script>
import hcard from "@/assets/js/hovercard.js"; // load shared hovercard placement code
export default {
  name: "HovercardInfoOnAnything",
  props: {
    id: {},
    left: {
      default: 0
    },
    "above-bottom": {
      default: 20
    },
    "below-top": {
      default: 25
    },
    "arrow-left": {
      default: 15
    }
  },
  computed: {
    // https://stackoverflow.com/questions/42872002/in-vue-js-component-how-to-use-props-in-css
    cssProps: function() {
      return {
        "--left": this.left + "px",
        "--above-bottom": this.aboveBottom + "px",
        "--below-top": this.belowTop + "px",
        "--arrow-left": this.arrowLeft + "px",
        "--arrow-left-plus-two": parseInt(this.arrowLeft) + 2 + "px"
      };
    }
  },
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
