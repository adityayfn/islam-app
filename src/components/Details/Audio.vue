<template>
  <div class="tooltip" data-tip="Putar Ayat">
    <audio ref="audioRef" :id="props.index" :src="props.audio"></audio>
    <button @click="audioToggle(props.index)">
      <SvgIcon
        :path="
          currentAudio === props.index && isPlaying
            ? mdiPauseCircle
            : mdiPlayCircle
        "
        class="text-xl mt-1"
      />
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue"
import SvgIcon from "../SvgIcon.vue"
import { mdiPlayCircle, mdiPauseCircle } from "@mdi/js"

const props = defineProps(["audio", "index"])

const audioRef = ref(null)

const isPlaying = ref(false)
const currentAudio = ref()

const audioToggle = (index) => {
  const audio = audioRef.value
  isPlaying.value = !isPlaying.value

  if (currentAudio.value == index && isPlaying.value) {
    audio.play()
    isPlaying.value = true
    setTimeout(() => {
      isPlaying.value = false
    }, audio.duration * 1050)
  } else {
    currentAudio.value = index
    audio.pause()
    isPlaying.value = false
  }
}

watch(currentAudio, () => {
  audioToggle(props.index)
})
</script>

<style lang="scss" scoped></style>
