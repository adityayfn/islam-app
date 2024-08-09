<template>
  <div class="tooltip" data-tip="Putar Ayat">
    <audio
      ref="audioRef"
      :id="props.index.toString()"
      :src="props.audio"
    ></audio>
    <button @click="audioToggle(props.index)">
      <v-icon
        :name="
          currentAudio === props.index && isPlaying
            ? 'bi-pause-circle-fill'
            : 'bi-play-circle-fill'
        "
        scale="1.2"
      ></v-icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from "vue"

const props = defineProps<{
  audio: string
  index: number
}>()

const audioRef = ref<HTMLAudioElement | null>(null)

const isPlaying = ref<boolean>(false)
const currentAudio = ref<number>()

const audioToggle = (index: number) => {
  const audio = audioRef.value
  isPlaying.value = !isPlaying.value

  if (currentAudio.value == index && isPlaying.value) {
    audio!.play()
    isPlaying.value = true
    setTimeout(() => {
      isPlaying.value = false
    }, audio!.duration * 1050)
  } else {
    currentAudio.value = index
    audio!.pause()
    isPlaying.value = false
  }
}

watch(currentAudio, () => {
  audioToggle(props.index)
})
</script>

<style scoped></style>
