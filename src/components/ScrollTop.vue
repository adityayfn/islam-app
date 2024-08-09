<template>
  <button
    v-if="isScrollTopVisible"
    @click="scrollTop"
    class="fixed bottom-4 right-4 bg-secondary px-2 py-2 rounded-full font-bold z-10 text-white"
  >
    <v-icon name="md-arrowupward" scale="1.4"></v-icon>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const isScrollTopVisible = ref<boolean>(false)

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
