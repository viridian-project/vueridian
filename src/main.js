import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

// Dependencies for tour guide:
// One may choose to make the library available globally: (but this seems unnecessary)
// import Driver from "driver.js";
// Object.defineProperty(Vue.prototype, "$driver", { value: { Driver: Driver } });
import "driver.js/dist/driver.min.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");