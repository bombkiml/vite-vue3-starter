import { Auth, Template } from "@/components/index";

const GlobalComponents = {
  install(app) {
    app.component("v-auth", Auth);
    app.component("v-template", Template);
  },
};

export default GlobalComponents;
