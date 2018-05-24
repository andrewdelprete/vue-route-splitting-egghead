import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VModal from "vue-js-modal";
Vue.use(VModal, { dynamic: true });

// Vue.component("my-modal", () => import(/* webpackChunkName: "MyModal" */ "@/components/MyModal"));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
