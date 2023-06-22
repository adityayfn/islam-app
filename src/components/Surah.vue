<template>
  <Navbar />

  <div class="bg-white dark:bg-black text-third dark:text-fourth md:mx-10">
    <div class="py-4">
      <h1 class="text-3xl text-center py-2 font-bold">{{ surah.name }}</h1>
      <hr class="w-48 my-0 mx-auto border border-b-2 border-third" />
    </div>

    <div
      v-for="(ayahs, index) in surah.ayahs"
      :key="index"
      class="gap-6 px-3 py-6"
    >
      <div class="number flex gap-2 place-items-center">
        <h1 class="text-2xl font-bold">{{ ayahs.verseId }}</h1>

        <audio ref="audioRef" :id="index" :src="ayahs.audio"></audio>
        <button @click="audioToggle(index)">
          <font-awesome-icon
            :icon="
              currentAudio === index && isPlaying
                ? ['fas', 'circle-pause']
                : ['fas', 'circle-play']
            "
            class="text-xl"
          />
        </button>
        <small class="">Double Tap to Playing Audio</small>
      </div>
      <div class="arab flex flex-col gap-5 pt-10">
        <h1 class="text-right text-4xl tracking-wide">{{ ayahs.ayahText }}</h1>
        <h1 class="text-xl">{{ ayahs.readText }}</h1>
      </div>
      <div class="py-5">
        <h1 class="text-xl">{{ ayahs.indoText }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import getSurahs from "../composable/getSurahs"
import Navbar from "./Navbar.vue"

import { ref } from "vue"
export default {
  components: {
    Navbar,
  },
  setup() {
    const { error, loadSurah, surah } = getSurahs()
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

      console.log(currentAudio.value)
    }

    return {
      surah,
      error,
      audioRef,
      audioToggle,
      isPlaying,
      currentAudio,
    }
  },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

.arab {
  font-family: "Amiri", serif;
}
</style>
