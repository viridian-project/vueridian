<template>
  <div>
    <div
      v-for="(comment, index) in comments"
      :key="comment.id"
      :class="{ negative: comment.voteBalance < 0 }"
    >
      <div class="comment">
        <VoteWedges v-bind:entity="comment" />
        <div class="column">
          <h3 v-if="'title' in comment && comment.title">
            {{ comment.title }}
          </h3>
          <p>{{ comment.text }}</p>
          <div class="meta-compact">
            <a v-bind:href="comment.createUserURL" class="user-name">{{
              comment.createUser
            }}</a>
            –
            <span class="date" v-bind:title="comment.createDateUTC">{{
              comment.createDate
            }}</span>
          </div>
        </div>
      </div>
      <div v-if="comment.rating !== null" class="info-ratings">
        <h4>Suggested Rating:</h4>
        <div
          class="rating"
          v-bind:class="{ negative: comment.rating.voteBalance < 0 }"
        >
          <div class="column">
            <ScoreTable :entity="comment.rating" />
          </div>
        </div>
      </div>
      <div
        v-if="indented && index + 1 < comments.length"
        class="separator"
      ></div>
    </div>
  </div>
</template>

<style src="@/assets/css/comments-ratings.css"></style>

<style scoped>
.large-comments-container > div:nth-child(odd) {
  background-color: whitesmoke;
}

.large-comments-container > div:nth-child(even) {
  background-color: lavender;
}

.meta-compact {
  text-align: right;
}
</style>

<script>
import VoteWedges from "@/components/widgets/VoteWedges.vue";
import ScoreTable from "@/components/widgets/ScoreTable.vue";

export default {
  props: {
    comments: {},
    indented: {
      default: false,
      type: Boolean
    }
  },
  components: {
    VoteWedges,
    ScoreTable
  }
};
</script>
