<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
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
<style scoped></style>
