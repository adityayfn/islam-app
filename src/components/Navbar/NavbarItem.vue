<template>
  <div :class="props.class" class="text-gray-500 dark:text-gray-400 text-xl">
    <router-link
      to="/"
      class="font-bold hover:text-secondary"
      :class="
        route.path.includes('/alquran')
          ? 'text-secondary underline underline-offset-4'
          : ''
      "
      >Al-Qur'an</router-link
    >
    <router-link
      to="/hadits"
      class="font-bold hover:text-secondary"
      :class="{
        ' text-secondary underline underline-offset-4':
          route.path === '/hadits',
      }"
      >Hadits</router-link
    >
    <router-link
      to="/doa"
      class="font-bold hover:text-secondary"
      :class="{
        ' text-secondary underline underline-offset-4': route.path === '/doa',
      }"
      >Doa</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { useRoute } from "vue-router"

const props = defineProps(["class"])
const route = useRoute()
</script>

<style>
li {
  list-style: none;
}
</style>
