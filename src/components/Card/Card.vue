<template>
  <div class="group mb-2" @click="detailSurah(props.surah.number.toString())">
    <div
      class="card w-[22.5rem] md:w-64 xl:h-56 border-2 dark:border-slate-600 group-hover:border-secondary cursor-pointer"
    >
      <div class="card-body flex flex-row justify-between items-center">
        <div class="w-36 h-28 md:w-24 flex flex-col gap-2">
          <h1
            class="border-2 dark:border-slate-600 rounded-full w-12 h-11 text-center py-2 group-hover:bg-secondary group-hover:text-white group-hover:border-none"
          >
            {{ props.surah.number }}
          </h1>
          <p>
            {{ props.surah.name.transliteration.id }} ({{
              props.surah.name.translation.id
            }})
          </p>
        </div>
        <div>
          <h1>{{ props.surah.name.short }}</h1>
          <h1>{{ props.surah.numberOfVerses }} Ayat</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { useRouter } from "vue-router"
import { SurahsType } from "../../types/"

const props = defineProps<{
  surah: SurahsType
}>()

const router = useRouter()

const detailSurah = (id: string) => {
  router.push(`/alquran/${id}`)
}
</script>

<style></style>
