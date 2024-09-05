<template>
  <h1 class="text-dark text-xl m-2">{{ msg }}</h1>

  <div class="mx-auto">
    <button class="btn btn-primary m-2" type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <ul>
    <li class="font-bold">Gether data from API /users :</li>
    <li v-for="(user, k) in users" :key="k">{{ user.name }}</li>
  </ul>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Provider } from "@/hooks/APIs/Provider";

defineProps({
  msg: String,
});

const count = ref(0);

const route = useRoute(); // get Route params

let users = reactive([]);
/* Provider
  .get("https://jsonplaceholder.typicode.com/users")
  .then((us) =>
    users.push(...us.data, ...[{ name: "a" }, { name: "b" }, { name: "c" }])
  );
let aaa = ref(0); */

// use Notify global variable
const notify = inject("notify");
onMounted(() => {
  // simple notify
  notify("Hello, World.");

  // notify with set title
  notify({
    title: "Vue 3 notification 🎉",
  });

  // notify with set title, text
  notify({
    title: "Authorization",
    text: "You have been logged in!",
  });

  // notify with set type
  notify({
    type: "success",
    title: "Successfully",
    text: "You have been succeed!",
  });
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
