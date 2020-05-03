<template>
  <div>
    <div v-for="entity in entities" :key="entity.id">
      <div
        class="entity-listing"
        v-bind:class="{ negative: entity.voteBalance < 0 }"
      >
        <VoteWedges
          :entity="entity"
          :entity-name="entityName"
          :screen="screen"
          :info-text="true"
        >
          <strong>How important</strong> is it that the product
          <span v-html="entityProductConnection"></span>?
          <strong>Vote up</strong> if you think that the {{ entityNameLong }}'s
          score should <strong>influence</strong> the product's score.
          <strong>Vote down</strong> if you think it's
          <strong>not appropriate</strong>.
        </VoteWedges>
        <!-- Hovercard with details on the entity score: -->
        <HovercardScore :entity="entity" :screen="screen" />
        <div class="entity-name" v-bind:title="entity.name">
          <a v-bind:href="entity.url">
            {{ entity.name }}
          </a>
        </div>
        <div>
          <a v-bind:href="entity.url">
            <img
              v-bind:src="loadImg(entity.logo)"
              v-bind:alt="entity.name + ' Logo'"
              class="logo"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entity-listing {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}

.entity-listing a {
  text-decoration: none;
  color: inherit;
}

.entity-listing > div {
  padding-right: 16px;
}

.entity-name {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logo {
  max-width: 80px;
  max-height: 80px;
}

@media (max-width: 535px) {
  .entity-listing > div {
    padding-right: 8px;
  }
  .logo {
    max-width: 50px;
    max-height: 50px;
  }
}
</style>

<script>
import fhandling from "@/assets/js/file-handling.js";

import VoteWedges from "@/components/widgets/VoteWedges.vue";
import HovercardScore from "@/components/widgets/HovercardScore.vue";

export default {
  props: [
    "screen",
    "entity-name",
    "entity-name-long",
    "entities",
    "entity-product-connection"
  ],
  components: {
    VoteWedges,
    HovercardScore
  },
  methods: {
    loadImg: fhandling.loadImg
  }
};
</script>
