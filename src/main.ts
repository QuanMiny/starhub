import { createApp } from "vue";

import App from "./App.vue";

// reset style sheet
import "@/styles/reset.scss";

// CSS common style sheet
import "@/styles/common.scss";

// iconfont
import "@/styles/iconfont.scss";

import router from "@/routers";

import { initDynamicRouter } from "./routers/dynamicRouter";

import pinia from "@/stores";

createApp(App).use(router).use(pinia).mount("#app");

initDynamicRouter();
