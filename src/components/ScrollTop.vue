<template>
  <button
    v-if="isScrollTopVisible"
    @click="scrollTop"
    class="fixed bottom-4 right-4 bg-secondary px-2 py-2 rounded-full font-bold z-10 text-white"
  >
    <SvgIcon :path="mdiArrowUpBoldCircle" :size="40" />
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue"
import SvgIcon from "./SvgIcon.vue"
import { mdiArrowUpBoldCircle } from "@mdi/js"

const isScrollTopVisible = ref(false)

const handleScroll = () => {
  isScrollTopVisible.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<style lang="scss" scoped></style>
