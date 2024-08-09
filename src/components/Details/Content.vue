<template>
  <div class="gap-6 px-3 py-6">
    <div class="tabs border-2 w-[140px] border-[#E7F4F2] dark:border-[#2D3638]">
      <a
        class="tab dark:text-white"
        :class="surah ? 'tab-active bg-[#E7F4F2] dark:bg-[#2D3638]' : ''"
        @click=";(surah = true), (tafsir = false)"
        >Surah</a
      >
      <a
        class="tab dark:text-white"
        :class="tafsir ? 'tab-active bg-[#E7F4F2] dark:bg-[#2D3638]' : ''"
        @click=";(tafsir = true), (surah = false)"
        >Tafsir</a
      >
    </div>
    <div v-if="surah">
      <div
        class="content-1 number flex gap-2 bg-[#E7F4F2] dark:bg-[#2D3638] p-2 justify-between"
      >
        <div class="flex items-center gap-3">
          <h1 class="text-2xl font-bold">{{ props.ayahs.number?.inSurah }}</h1>

          <Audio :audio="props.ayahs.audio.primary" :index="props.index" />
        </div>
        <div class="flex gap-2 items-center"></div>
      </div>
      <div class="content-2 arab flex flex-col gap-5 pt-10">
        <h1 class="text-right text-4xl tracking-wide">
          {{ props.ayahs.text.arab }}
        </h1>
        <h1 class="text-xl text-secondary">
          {{ props.ayahs.text.transliteration.en }}
        </h1>
      </div>
      <div class="py-5">
        <h1 class="text-base">{{ props.ayahs.translation.id }}</h1>
      </div>
    </div>
    <div v-else>
      <h1 class="mt-5">{{ props.ayahs.tafsir?.id.short }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue"
import { VersesType } from "../../types/"

import Audio from "./Audio.vue"

const props = defineProps<{
  ayahs: VersesType
  index: number
}>()

const surah = ref<boolean>(true)
const tafsir = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
