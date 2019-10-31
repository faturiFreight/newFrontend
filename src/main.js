import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/style.scss";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
