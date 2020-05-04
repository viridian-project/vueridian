<template>
  <div class="vote hcenter">
    <HovercardInfo
      v-if="infoText"
      :id="screen + '-' + entityName + '-i-' + entity.id"
    >
      <slot></slot>
    </HovercardInfo>
    <div
      class="vote-wedge vote-wedge-up"
      v-bind:class="{ voted: entity.vote === 1 }"
      v-on:click="voteUp(entity)"
    ></div>
    <HovercardInfoOnAnything
      v-if="infoText"
      :id="screen + '-' + entityName + '-s-' + entity.id"
      left="-23"
      arrow-left="20"
      above-bottom="35"
      below-top="35"
    >
      <template v-slot:anything>
        <div class="vote-balance">{{ entity.voteBalance }}</div>
      </template>
      <template v-slot:infotext>
        <slot></slot>
      </template>
    </HovercardInfoOnAnything>
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
import HovercardInfoOnAnything from "@/components/widgets/HovercardInfoOnAnything.vue";

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
    HovercardInfo,
    HovercardInfoOnAnything
  },
  methods: {
    voteUp: voteUp,
    voteDown: voteDown
  }
};
</script>
