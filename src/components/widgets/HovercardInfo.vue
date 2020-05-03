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
    placeInfoHovercard: (hovercard_id, button_id, what) => {
      let hovercard = document.getElementById(hovercard_id);
      let permanent = hovercard.getAttribute("data-permanent");
      let show = false;
      let hide = false;
      if (permanent === "false" && what === "mouseover") show = true;
      else if (permanent === "false" && what === "mouseout") hide = true;
      else if (permanent === "false" && what === "click") {
        hovercard.setAttribute("data-permanent", true);
        show = true;
      } else if (permanent === "true" && what === "click") {
        hovercard.setAttribute("data-permanent", false);
        show = false;
      }
      if (show) {
        let blob = document.getElementById(button_id);
        let rect = blob.getBoundingClientRect();
        let windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        let leftOffset = blob.clientWidth;
        let above = true;
        if (rect.top < 225) {
          above = false;
        }
        if (!above) {
          hovercard.classList.remove("hovercard-above");
          hovercard.style.top = rect.bottom + 10 + "px";
          hovercard.style.bottom = null;
        } else {
          hovercard.classList.add("hovercard-above");
          hovercard.style.top = null;
          hovercard.style.bottom = windowHeight - rect.top + 10 + "px";
        }
        hovercard.style.left = rect.left - leftOffset + "px";
        hovercard.style.display = "block";
      } else if (hide) {
        hovercard.style.display = "none";
      }
    }
  }
};
</script>
