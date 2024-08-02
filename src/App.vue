<template>
  <Navbar />
  <ScrollTop />
  <router-view></router-view>
  <footer class="h-14 mt-10 text-center text-secondary">
    <h1>Made With Vue</h1>
    <small class="text-md font-bold">&copy 2023 All right reversed</small>
  </footer>
</template>

<script setup>
import Navbar from "./components/Navbar/Index.vue"
import ScrollTop from "./components/ScrollTop.vue"
import { onMounted } from "vue"

onMounted(() => {
  const darkOnStorage = localStorage.getItem("darkOn")
  if (darkOnStorage == "true") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
})
</script>
<style></style>
