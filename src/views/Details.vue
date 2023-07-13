<template>
  <div class="bg-white dark:bg-black text-third dark:text-fourth md:mx-10">
    <div class="py-4">
      <h1 class="text-3xl text-center py-2 font-bold">
        {{ surahName.id }}
      </h1>
      <hr class="w-48 my-0 mx-auto border border-b-2 border-third" />
    </div>

    <div
      v-for="(ayahs, index) in surah.verses"
      :key="index"
      class="gap-6 px-3 py-6"
    >
      <div class="number flex gap-2 items-center">
        <h1 class="text-2xl font-bold">{{ ayahs.number.inSurah }}</h1>

        <audio ref="audioRef" :id="index" :src="ayahs.audio.primary"></audio>
        <button @click="audioToggle(index)">
          <font-awesome-icon
            :icon="
              currentAudio === index && isPlaying
                ? ['fas', 'circle-pause']
                : ['fas', 'circle-play']
            "
            class="text-xl mt-1"
          />
        </button>
        <small class="">Double Tap to Playing Audio</small>
      </div>
      <div class="arab flex flex-col gap-5 pt-10">
        <h1 class="text-right text-4xl tracking-wide">{{ ayahs.text.arab }}</h1>
        <h1 class="text-xl">{{ ayahs.text.transliteration.en }}</h1>
      </div>
      <div class="py-5">
        <h1 class="text-xl">{{ ayahs.indoText }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
import getSurahs from "../composable/getSurahs"

import { ref } from "vue"
const { error, loadSurah, surah, surahName } = getSurahs()
loadSurah()

const audioRef = ref(null)

const isPlaying = ref(false)
const currentAudio = ref()

const audioToggle = (index) => {
  const audio = audioRef.value[index]
  isPlaying.value = !isPlaying.value

  if (currentAudio.value == index && isPlaying.value) {
    audio.play()
    isPlaying.value = true
    setTimeout(() => {
      isPlaying.value = false
    }, audio.duration * 1000)
  } else {
    currentAudio.value = index
    audio.pause()
    isPlaying.value = false
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

.arab {
  font-family: "Amiri", serif;
}
</style>
