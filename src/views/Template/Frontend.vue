<template>
  <div class="flex h-screen justify-center items-center">
    <div class="text-center">
      <!-- ⬅️ THIS DIV WILL BE CENTERED -->

      <div class="text-center">

        <nav v-if="isLogin" class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <router-link class="nav-link" :class="isUrl == '/home' ? 'active' : false" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :class="isUrl == '/about' ? 'active' : false" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Something</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="mx-auto p-5">
          <notifications />
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <div :key="$route.path">
                  <component :is="Component" />
                </div>
              </keep-alive>
            </transition>
          </router-view>
        </div>

        <div class="cols-2 mx-auto text-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue 3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, computed, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
// router
const router = useRouter();

// is login
const isLogin = computed(() => {
  return router.currentRoute.value.fullPath.match(/^\/(login|logout).*$/) ? false : true;
});

// current url
const isUrl = computed(() => {
  return router.currentRoute.value.fullPath;
});

onMounted(() => {
  console.log("isLogin:", isLogin.value);
});

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
