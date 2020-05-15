<template>
  <div class="user-created-box">
    <div class="user-date">
      created
      <span class="date" :title="entity.createDateUTC">{{
        entity.createDate
      }}</span>
      by:
    </div>
    <div class="user-infos">
      <a :href="entity.createUserURL"
        ><img class="avatar" :src="entity.createUserAvatar"
      /></a>
      <div class="user-details">
        <a :href="entity.createUserURL" class="user-name">{{
          entity.createUser
        }}</a>
        <div
          class="user-reputation"
          :title="'User\'s reputation score: ' + entity.createUserReputation"
        >
          <img
            src="@/assets/icons/ionicons/md-heart.svg"
            alt="Reputation"
            class="inline-icon"
          />
          <span>{{ entity.createUserReputation }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-created-box {
  background: #ceddce;
  padding: 8px;
  font-size: 0.9em;
}

.user-infos {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.avatar {
  width: 32px;
  height: 32px;
}

.user-details {
  margin-left: 8px;
  word-wrap: anywhere;
}

.user-reputation {
  display: flex;
  align-items: center;
  font-weight: bold;
}
</style>

<script>
export default {
  props: ["entity"]
};
</script>
