<template>
  <div class="vote hcenter">
    <HovercardInfo v-if="infoText" :infoId="entity.id">
      <slot></slot>
    </HovercardInfo>
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
</template>

<style scoped></style>

<script>
import HovercardInfo from "@/components/widgets/HovercardInfo.vue";

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
  props: {
    entity: {},
    "entity-name": {},
    screen: {},
    "info-text": {
      default: false,
      type: Boolean
    }
  },
  components: {
    HovercardInfo
  },
  methods: {
    voteUp: voteUp,
    voteDown: voteDown
  }
};
</script>
