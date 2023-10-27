<template>
  <div
    class="rounded-sm mx-1 my-2 px-2 py-1 hover:text-black cursor-pointer text-secondary dark:hover:text-white"
    @click="darkMode()"
  >
    <SvgIcon
      :path="darkOn ? mdiWeatherSunny : mdiMoonWaningCrescent"
      :size="25"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import SvgIcon from "./SvgIcon.vue"
import { mdiMoonWaningCrescent, mdiWeatherSunny } from "@mdi/js"
const darkOn = ref(false)
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
