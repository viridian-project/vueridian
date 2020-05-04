<template>
  <div class="vote hcenter">
    <HovercardInfo
      v-if="infoText"
      :screen="screen"
      :name="entityName"
      :id="entity.id"
    >
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

<style scoped>
.vote {
  padding-right: 8px;
}

.vote-wedge {
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
}

.vote-wedge:hover {
  border-bottom-color: #888;
  /* or: dodgerblue; */
  border-top-color: #888;
  /* or: dodgerblue; */
  cursor: pointer;
}

.vote-wedge-up {
  border-bottom: 20px solid #aaa;
  /* or: skyblue; */
  margin-bottom: 8px;
}

.vote-wedge-down {
  border-top: 20px solid #aaa;
  /* or: skyblue; */
  margin-top: 8px;
}

.voted {
  border-bottom-color: #40826d;
  border-top-color: #40826d;
}

.voted:hover {
  border-bottom-color: #40826d;
  border-top-color: #40826d;
  cursor: default;
}

.vote-balance {
  color: dimgray;
  font-weight: bold;
}
</style>

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
