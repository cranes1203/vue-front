import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

window.Kakao.init("d5ae948b432814dceb23cec2f4fe1abb");
// test
