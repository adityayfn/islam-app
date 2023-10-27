<template>
  <audio ref="audioRef" :id="props.index" :src="props.audio"></audio>
  <button @click="audioToggle(props.index)">
    <font-awesome-icon
      :icon="
        currentAudio === props.index && isPlaying
          ? ['fas', 'circle-pause']
          : ['fas', 'circle-play']
      "
      class="text-xl mt-1"
    />
  </button>
  <small class="">Double Tap to Playing Audio</small>
</template>

<script setup>
import { defineProps, ref } from "vue"
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
    }, audio.duration * 1000)
  } else {
    currentAudio.value = index
    audio.pause()
    isPlaying.value = false
  }
}
</script>

<style lang="scss" scoped></style>
