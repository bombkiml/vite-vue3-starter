// axios with axios retry
import axiosService from "axios";
import axiosRetry from "axios-retry";
const axios = axiosService.create();
axiosRetry(axios, {
  retries: Infinity,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return 7000; // time interval between retries
  },
  retryCondition: (error) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error;
  },
});

// Vue 3 notify
import Notifications, { notify } from "@kyvg/vue3-notification";

// Vue 3 use import VueProgressBar
import VueProgressBar from "@aacassandra/vue3-progressbar";
const VueProgressBarOptions = {
  color: "#6EC164",
  failedColor: "#e3342f",
  thickness: "3px",
  transition: {
    speed: "0.9s",
    opacity: "0.9s",
    termination: 1000,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

// vue 3 use VueDatePicker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// vue 3 use moment
import moment from "moment";
moment.locale("th");

// vue 3 use fontAwesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

export {
  axios,
  Notifications,
  notify,
  VueProgressBar,
  VueProgressBarOptions,
  VueDatePicker,
  moment,
  FontAwesomeIcon,
};
