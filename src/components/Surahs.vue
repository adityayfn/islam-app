<template>
  <div class="text-third bg-white dark:bg-black dark:text-fourth md:mx-20">
    <div class="py-10 px-10">
      <div class="w-36 md:w-48">
        <input
          type="search"
          placeholder="Cari Surah"
          v-model="search"
          class="w-full max-w-xs text-black placeholder:text-third border border-third placeholder:p-2 rounded-xl h-8 focus:border-none bg-white dark:bg-third placeholder:dark:text-black"
        />
      </div>

      <h1 class="text-center text-3xl font-bold py-5">Daftar Surah</h1>
      <div class="overflow-x-auto font-bold">
        <table class="table table-xs md:table-lg">
          <thead>
            <tr class="text-third text-md md:text-2xl dark:text-fourth">
              <th>No</th>
              <th>Nama</th>
              <th>Asma</th>
              <th>Ayat</th>
            </tr>
          </thead>
          <tbody v-for="surah in filteredSurahs">
            <tr
              class="hover:bg-third hover:text-white transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-100 transition ease-in-out duration-300 cursor-pointer"
              @click="detailSurah(surah.number)"
            >
              <td>{{ surah.number }}</td>
              <td>{{ surah.name }} <br />({{ surah.translationId }})</td>
              <td class="arab text-lg">{{ surah.asma }}</td>
              <td>{{ surah.numberOfAyahs }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import getSurahs from "../composable/getSurahs"
import { useRouter } from "vue-router"
export default {
  setup() {
    const { surahs, load, error } = getSurahs()
    load()
    const search = ref("")

    const router = useRouter()

    const filteredSurahs = computed(() => {
      return surahs.value.filter((surah) =>
        surah.name.toLowerCase().includes(search.value)
      )
    })
    const detailSurah = (id) => {
      return router.push(`/surah/${id}`)
    }

    return { surahs, error, filteredSurahs, search, detailSurah }
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

.arab {
  font-family: "Amiri", serif;
}
</style>
