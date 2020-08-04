<template>
  <div id="page">
    <HeaderHome />
    <div id="main-content">
      <section class="home">
        <img
          alt="Viridian logo"
          src="@/assets/images/StellaOctangula_finished.svg"
        />
        <WelcomeMessage msg="Welcome to the Viridian Network Mockup App" />
        <!-- <Modal
          wrapperClass="center-modal-wrapper"
          v-model="showModal"
          title="My first modal"
        >
          <p>Modal content goes here...</p>
        </Modal> -->
      </section>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.center-modal-wrapper {
  display: flex;
  align-items: center;
}
</style>

<script>
// import VueModal from "@kouts/vue-modal";
import "@kouts/vue-modal/dist/vue-modal.css";

// @ is an alias to /src
import HeaderHome from "@/components/headers/HeaderHome.vue";
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // Modal: VueModal,
    HeaderHome,
    WelcomeMessage,
    Footer
  }
  // data: function() {
  //   return {
  //     showModal: true
  //   };
  // }
};
</script>
