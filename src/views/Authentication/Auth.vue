<template></template>
<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
import Auth from "@/hooks/auth/authentication";
// inject
const notify = inject("notify");
// use router
const router = useRouter();
// check alive
Auth.isAlive((err, alive) => {
  if (err && !alive) {
    notify({
      type: "error",
      title: "แจ้งเตือน",
      text: "กรุณาลงชื่อเข้าสู่ระบบ",
    });
    router.push({ path: "/login" });
  }
});
</script>
