<template>
  <!-- <div id="app" @click="closeHovercards($event.target)"> -->
  <div id="app">
    <router-view />
  </div>
</template>

<style src="@/assets/css/main.css"></style>

<script>
// export default {
//   methods: {
//     closeHovercards: target => {
//       if (
//         !target.classList.contains("hovercard") &&
//         !target.classList.contains("hovercard-container") &&
//         !target.parentNode.classList.contains("hovercard-container") &&
//         !target.parentNode.parentNode.classList.contains("hovercard-container") &&
//         !target.parentNode.parentNode.parentNode.classList.contains("hovercard-container")
//       ) {
//         // close all hovercards
//         let hcards = document.getElementsByClassName("hovercard");
//         for (let hcard of hcards) {
//           hcard.style.display = "none";
//         }
//       }
//     }
//   }
// };
</script>
