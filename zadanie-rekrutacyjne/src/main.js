import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import ExpandButton from "./components/ui/ExpandButton.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("expand-button", ExpandButton);
app.mount("#app");
