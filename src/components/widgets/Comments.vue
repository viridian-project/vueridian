<template>
  <div class="comments-container">
    <div
      v-for="comment in comments"
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
    </div>
  </div>
</template>

<style src="@/assets/css/comments-ratings.css"></style>

<style scoped>
.comments-container > div:nth-child(odd) {
  background-color: whitesmoke;
}

.comments-container > div:nth-child(even) {
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
  props: ["comments"],
  components: {
    VoteWedges,
    ScoreTable
  }
};
</script>
