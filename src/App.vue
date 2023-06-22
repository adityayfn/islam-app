<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from "vue"
export default {
  setup() {
    onMounted(() => {
      const darkOnStorage = localStorage.getItem("darkOn")
      if (darkOnStorage == "true") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    })
  },
}
</script>
<style scoped></style>
