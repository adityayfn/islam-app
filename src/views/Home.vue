<template>
  <section
    class="text-base-500 bg-white dark:bg-neutral dark:text-white min-h-screen"
  >
    <div
      class="h-72 md:h-80 w-full bg-gradient-to-t from-secondary to-green-500 flex flex-col justify-center items-center gap-5"
    >
      <img
        src="/public/alquran.svg"
        alt="alquran"
        class="md:w-32 dark:hidden"
      />
      <img
        src="/public/alquran2.svg"
        alt="alquran"
        class="md:w-32 hidden dark:inline"
      />
      <div>
        <input
          type="search"
          placeholder="Cari Surah"
          class="input w-64 md:w-96 max-w-xs text-black dark:bg-neutral placeholder:dark:text-white dark:text-white bg-white focus:border-none"
          v-model="search"
        />
      </div>
    </div>

    <h1 class="text-center text-3xl font-bold py-5">Daftar Surah</h1>
    <div class="container-content">
      <div
        v-if="isLoading"
        class="flex gap-4 flex-wrap overflow-x-hidden justify-center"
      >
        <CardSkeleton v-for="skeleton in 114" />
      </div>
      <div v-else class="flex gap-4 flex-wrap overflow-x-hidden justify-center">
        <Card
          v-for="(surah, index) in (filteredSurahs as SurahsType[])"
          :surah="surah"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import CardSkeleton from "../components/Card/CardSkeleton.vue"
import { SurahsType } from "../types"

import Card from "../components/Card/Card.vue"

import { useQuery } from "@tanstack/vue-query"

const { data, isLoading } = useQuery({
  queryKey: ["surahs"],
  queryFn: async () =>
    await fetch("https://api.quran.gading.dev/surah").then((res) => {
      return res.json()
    }),
})

const search = ref<string>("")

const filteredSurahs = computed(() => {
  return data?.value?.data.filter((surah: SurahsType) =>
    surah.name.transliteration.id.toLowerCase().includes(search.value)
  )
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

.arab {
  font-family: "Amiri", serif;
}
</style>
