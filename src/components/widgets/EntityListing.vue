<template>
  <div>
    <div
      v-bind:id="'info-hovercard-' + screen + '-' + entityName"
      class="hovercard hovercard-info"
      style="display: none;"
      data-permanent="false"
    >
      <strong>How important</strong> is it that the product
      <span v-html="entityProductConnection"></span>?
      <strong>Vote up</strong> if you think that the {{ entityNameLong }}'s
      score should <strong>influence</strong> the product's score.
      <strong>Vote down</strong> if you think it's
      <strong>not appropriate</strong>.
    </div>
    <div v-for="entity in entities" :key="entity.id">
      <div
        class="entity-listing"
        v-bind:class="{ negative: entity.voteBalance < 0 }"
      >
        <div class="vote hcenter">
          <img
            v-bind:id="'info-' + screen + '-' + entity.id"
            class="vote-info"
            src="icons/ionicons/md-information-circle.svg"
            alt="information"
            v-on:click="
              placeInfoHovercard(
                'info-hovercard-' + screen + '-' + entityName,
                'info-' + screen + '-' + entity.id,
                'click'
              )
            "
            v-on:touchend="
              placeInfoHovercard(
                'info-hovercard-' + screen + '-' + entityName,
                'info-' + screen + '-' + entity.id,
                'click'
              )
            "
            v-on:mouseover="
              placeInfoHovercard(
                'info-hovercard-' + screen + '-' + entityName,
                'info-' + screen + '-' + entity.id,
                'mouseover'
              )
            "
            v-on:mouseout="
              placeInfoHovercard(
                'info-hovercard-' + screen + '-' + entityName,
                'info-' + screen + '-' + entity.id,
                'mouseout'
              )
            "
          />
          <div
            class="vote-wedge vote-wedge-up"
            v-bind:class="{ voted: entity.vote === 1 }"
            v-on:click="voteUp(entity)"
          ></div>
          <div class="vote-balance">{{ entity.voteBalance }}</div>
          <div
            class="vote-wedge vote-wedge-down"
            v-bind:class="{ voted: entity.vote === -1 }"
            v-on:click="voteDown(entity)"
          ></div>
        </div>
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
        <div class="entity-name" v-bind:title="entity.name">
          <a v-bind:href="entity.url">
            {{ entity.name }}
          </a>
        </div>
        <div>
          <a v-bind:href="entity.url">
            <img
              v-bind:src="entity.logo"
              v-bind:alt="entity.name + ' Logo'"
              class="logo"
            />
          </a>
        </div>
      </div>
      <!-- Hovercard with details on the entity score: -->
      <Hovercard :entity="entity" :screen="screen" />
    </div>
  </div>
</template>

<script>
import ScoreBlob from "@/components/widgets/ScoreBlob.vue";
import Hovercard from "@/components/widgets/Hovercard.vue";

const voteUp = entity => {
  if (entity.vote < 1) {
    entity.voteBalance += 1;
    entity.vote += 1;
  }
};
const voteDown = entity => {
  if (entity.vote > -1) {
    entity.voteBalance -= 1;
    entity.vote -= 1;
  }
};

export default {
  props: [
    "screen",
    "entity-name",
    "entity-name-long",
    "entities",
    "entity-product-connection"
  ],
  components: {
    ScoreBlob,
    Hovercard
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
    },
    placeScoreHovercard: (hovercard_id, button_id, what) => {
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
        let above = false;
        if (windowHeight - rect.top < 300) {
          above = true;
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
    },
    voteUp: voteUp,
    voteDown: voteDown
  }
};
</script>
