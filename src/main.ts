import { createApp } from "vue";
import App from "./App.vue";
import authorModal from "./_authorModal";
import projectConfig from "./_projectConfig";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

createApp(App).use(projectConfig).use(authorModal).mount("#app");
