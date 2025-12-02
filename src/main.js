import { createApp } from "vue";
import Application from "./App.vue";
import router from "./router/index";
import initialize from "../plugins/component";
import {
  Notifications,
  notify,
  VueProgressBar,
  VueProgressBarOptions,
  VueDatePicker,
  moment,
  FontAwesomeIcon,
} from "./extensions";

// Vue 3 use Custom style ,Bootstrap and Bootswatch
import "@/assets/scss/app.sass";
import "../node_modules/bootswatch/dist/sandstone/bootstrap.min.css";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const app = createApp(Application);

// Global variable
app.provide("notify", notify);
app.provide("moment", moment);
app.provide("bootstrap", bootstrap);

// app component assign
app.component("VueDatePicker", VueDatePicker);
app.component("font-awesome-icon", FontAwesomeIcon);

// app usage
app
  .use(router)
  .use(Notifications)
  .use(VueProgressBar, VueProgressBarOptions)
  .use(initialize)
  .use(moment)
  .mount("#app");
