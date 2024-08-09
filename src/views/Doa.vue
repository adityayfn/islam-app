<template>
  <section>
    <div
      class="h-72 md:h-80 w-full bg-gradient-to-t from-secondary to-green-500 flex flex-col justify-center items-center gap-5 mx-auto"
    >
      <div class="flex flex-col justify-center items-center gap-5 h-72">
        <div class="dark:hidden">
          <v-icon name="fa-star-and-crescent" scale="5" fill="white"></v-icon>
        </div>
        <div class="hidden dark:inline">
          <v-icon name="fa-star-and-crescent" scale="5" fill="black"></v-icon>
        </div>

        <input
          type="search"
          placeholder="Cari Doa"
          class="input w-72 md:w-96 max-w-xs text-black dark:bg-neutral placeholder:dark:text-white dark:text-white bg-white focus:border-none"
          v-model="search"
        />
      </div>
    </div>
    <div
      class="flex flex-col gap-4 my-5 md:w-[750px] xl:w-[1100px] mx-4 md:mx-auto"
    >
      <div
        class="collapse border-2 hover:border-secondary"
        v-for="(doa , index) in (prayerList as DoaType[])"
      >
        <input type="checkbox" />
        <div class="collapse-title dark:text-base-200">
          <h1>
            <span class="font-bold">{{ index + 1 }}. </span> {{ doa.nama }}
          </h1>
        </div>
        <div class="collapse-content flex flex-col dark:text-base-200">
          <h1 class="text-4xl text-right mb-3">{{ doa.arab }}</h1>
          <h1 class="text-secondary">{{ doa.latin }}</h1>
          <h1 class="text-base-400">{{ doa.arti }}</h1>
          <div class="h-auto bg-base-100 p-2 rounded-md text-neutral">
            <h1 class="text-sm">{{ doa.riwayat }}</h1>
          </div>
        </div>
      </div>
      <div
        class="my-0 mx-auto"
        :class="prayerList.length < 20 ? 'hidden' : 'block'"
      >
        <button
          @click="loadMore()"
          class="btn btn-secondary"
          :disabled="isAllDataDisplayed"
        >
          Daftar Doa Lainnya
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import listDoa from "../utils/doa-harian.json"

import { DoaType } from "../types/"

const data = ref<DoaType[]>(listDoa)
const displayedData = ref<DoaType[]>([])
const itemsPerPage = ref<number>(20)
const currentIndex = ref<number>(0)
const search = ref<string>("")

onMounted(() => {
  displayedData.value = listDoa.slice(
    currentIndex.value,
    currentIndex.value + itemsPerPage.value
  )
  currentIndex.value += itemsPerPage.value
})

const addDataToDisplay = () => {
  const newData = data.value.slice(
    currentIndex.value,
    currentIndex.value + itemsPerPage.value
  )
  displayedData.value = displayedData.value.concat(newData)
  currentIndex.value += itemsPerPage.value
}

const loadMore = () => {
  addDataToDisplay()
}

const isAllDataDisplayed = computed(() => currentIndex.value >= listDoa.length)

const prayerList = computed(() => {
  if (search.value === "") return displayedData.value
  return listDoa.filter((prayer) =>
    prayer.nama.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style scoped></style>
