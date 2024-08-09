<template>
  <section>
    <div
      class="h-72 md:h-80 w-full bg-gradient-to-t from-secondary to-green-500 flex flex-col justify-center items-center gap-5 mx-auto"
    >
      <div class="flex flex-col justify-center items-center gap-5 h-auto pt-2">
        <div class="dark:hidden">
          <v-icon class="" name="md-menubook" scale="5" fill="white"></v-icon>
        </div>
        <div class="hidden dark:inline">
          <v-icon class="" name="md-menubook" scale="5" fill="black"></v-icon>
        </div>

        <input
          type="search"
          placeholder="Cari Nomor Hadits"
          class="input w-72 md:w-96 max-w-xs text-black dark:bg-neutral placeholder:dark:text-white dark:text-white bg-white focus:border-none"
          v-model="search"
        />
        <div class="tab">
          <h1
            class="tab"
            v-for="hadits in (HaditsList as HaditsListType[])"
            :key="hadits.slug"
            :class="
              selectedHadits === hadits.slug
                ? 'tab-active bg-[#E7F4F2] rounded-xl text-neutral'
                : 'text-base-200'
            "
            @click="changeSelectedHadits(hadits.slug)"
          >
            {{ hadits.name }}
          </h1>
        </div>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col gap-5 mt-6">
      <ContentSkeleton v-for="cs in 20" :key="cs" />
    </div>

    <div v-else-if="search !== ''">
      <div v-if="isError" class="min-h-[50vh] flex justify-center items-center">
        <h1 class="dark:text-white text-xl">{{ errorMessage }}</h1>
      </div>
      <div v-else>
        <SearchResult :result="searchResults" />
      </div>
    </div>

    <div v-else class="mx-4 mt-6">
      <h1 class="text-center dark:text-base-200">
        Terdapat <span class="font-bold"> {{ data?.total }}</span> hadits
        menurut <span class="font-bold"> {{ data?.name }}</span>
      </h1>

      <Content
        v-for="item in (data?.items as HaditsType[] | HaditsContentType)"
        :item="item"
      />

      <div class="join flex justify-center">
        <button
          class="join-item btn btn-secondary"
          :disabled="data?.pagination.currentPage === 1"
          @click="prevPage()"
        >
          «
        </button>
        <button class="join-item btn">
          Page {{ data?.pagination.currentPage }}
        </button>
        <button class="join-item btn btn-secondary" @click="nextPage()">
          »
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import SearchResult from "../components/Hadits/SearchResult.vue"
import ContentSkeleton from "../components/Hadits/ContentSkeleton.vue"
import Content from "../components/Hadits/Content.vue"
import { useQuery } from "@tanstack/vue-query"
import { HaditsList } from "../constant/"
import { HaditsType, HaditsListType, HaditsContentType } from "../types/"

const selectedHadits = ref<string>("abu-dawud")
const loading = ref<boolean>(true)
const page = ref<number>(1)
const search = ref<string>("")
const searchResults = ref<HaditsType[]>([])
const debounceSearch = ref()
const isError = ref<boolean>(false)
const errorMessage = ref<string>("")

const changeSelectedHadits = (value: string) => {
  selectedHadits.value = value
}

const { data, refetch } = useQuery({
  queryKey: ["hadits"],
  queryFn: async () =>
    await fetch(
      `https://hadis-api-id.vercel.app/hadith/${selectedHadits.value}?page=${page.value}`
    ).then((res) => res.json()),
})
console.log(data.value)

const getHaditsNumber = async () => {
  const res = await fetch(
    `https://hadis-api-id.vercel.app/hadith/${selectedHadits.value}/${search.value}`
  )
  const data = await res.json()
  if (!res.ok) {
    isError.value = true
    errorMessage.value = `Tidak ada hasil dari hadits nomor ${search.value}`
  } else {
    isError.value = false
    searchResults.value = data
  }
}

const nextPage = async () => {
  page.value++
  await refetch()
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 200)
}

const prevPage = async () => {
  page.value--
  await refetch()
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, 200)
}

watch(selectedHadits, async () => {
  page.value = 1
  await refetch()
  search.value = ""
})
watch(search, () => {
  if (debounceSearch.value) clearTimeout(debounceSearch.value)
  loading.value = true
  debounceSearch.value = setTimeout(() => {
    getHaditsNumber()
    loading.value = false
  }, 1200)
})

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style lang="scss" scoped></style>
