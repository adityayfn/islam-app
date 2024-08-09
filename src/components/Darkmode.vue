<template>
  <div
    class="rounded-sm mx-1 my-2 px-2 py-1 hover:text-black cursor-pointer text-secondary dark:hover:text-white"
    @click="darkMode()"
  >
    <v-icon
      :name="darkOn ? 'ri-sun-foggy-fill' : 'ri-moon-foggy-fill'"
      scale="1.5"
    ></v-icon>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
const darkOn = ref<boolean>(false)
const darkMode = () => {
  darkOn.value = !darkOn.value

  if (darkOn.value) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("darkOn", "true")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("darkOn", "false")
  }
}
onMounted(() => {
  const darkOnStorage = localStorage.getItem("darkOn")
  if (darkOnStorage == "true") {
    darkOn.value = true
    document.documentElement.classList.add("dark")
  } else {
    darkOn.value = false
    document.documentElement.classList.remove("dark")
  }
})
</script>

<style lang="scss" scoped></style>
