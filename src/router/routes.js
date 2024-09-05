// import Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// Default
import NotFound from "@/views/Default/NotFound.vue";
import Unauthen from "@/views/Default/Unauthen.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  {
    path: "/401",
    component: Unauthen,
  },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

export default routes;
