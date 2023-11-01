<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div
    class="bg-white dark:bg-neutral text-base-500 dark:text-white md:mx-10"
    v-else
  >
    <div class="py-4">
      <div class="flex justify-center items-center gap-2">
        <h1 class="text-3xl text-center py-2 font-bold">
          {{ data?.data.name.transliteration.id }}
        </h1>

        <Modal
          :path="mdiInformationSlabCircle"
          href="#my_modal_1"
          id="my_modal_1"
          title-modal="Detail Surah"
          :content="data.data.tafsir.id"
        />
      </div>
      <hr class="w-48 my-0 mx-auto border border-b-2 border-secondary" />
    </div>

    <Content
      v-for="(ayahs, index) in data?.data?.verses"
      :index="index"
      :ayahs="ayahs"
    />
  </div>
</template>
<script setup>
import Loading from "../components/Loading.vue"
import { useQuery } from "@tanstack/vue-query"
import Content from "../components/Details/Content.vue"
import { useRoute } from "vue-router"
import Modal from "../components/Modal.vue"
import { mdiInformationSlabCircle } from "@mdi/js"
import { ref, onMounted } from "vue"

const loading = ref(true)
const route = useRoute()

const { data } = useQuery({
  queryKey: ["detailSurah"],
  queryFn: async () =>
    await fetch(`https://api.quran.gading.dev/surah/${route.params.id}`).then(
      (res) => {
        return res.json()
      }
    ),
})

onMounted(() => {
  setTimeout(() => {
    loading.value = false
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 2000)
})
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

.arab {
  font-family: "Amiri", serif;
}
</style>
