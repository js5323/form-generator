import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router";

import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/index.less";

Vue.use(ElementUI);

Vue.config.productionTip = false;

import "./components/widgets/autoInportWidgets";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
