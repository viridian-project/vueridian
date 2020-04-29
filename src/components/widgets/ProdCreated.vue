<template>
  <div class="user-created-box">
    <div class="user-date">
      created
      <span class="date" v-bind:title="prod.createDateUTC">{{
        prod.createDate
      }}</span>
      by:
    </div>
    <div class="user-infos">
      <a v-bind:href="prod.createUserURL"
        ><img class="avatar" v-bind:src="prod.createUserAvatar"
      /></a>
      <div class="user-details">
        <a v-bind:href="prod.createUserURL" class="user-name">{{
          prod.createUser
        }}</a>
        <div class="user-reputation" title="User's reputation score: 12">
          <img
            src="icons/ionicons/md-heart.svg"
            alt="Reputation"
            class="inline-icon"
          />
          <span>12</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prod"]
};
</script>
