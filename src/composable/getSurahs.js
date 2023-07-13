import { ref } from "vue"
import { useRoute } from "vue-router"

const getSurahs = () => {
  const surahs = ref([])
  const error = ref(null)
  const route = useRoute()
  const id = route.params.id
  const surah = ref([])

  const load = async () => {
    try {
      await fetch("https://api.quran.gading.dev/surah")
        .then((res) => res.json())
        .then((datas) => {
          let i = datas.data
          surahs.value = i
        })
    } catch (err) {
      error.value = err.message
    }
  }

  const surahName = ref("")

  const loadSurah = async () => {
    try {
      await fetch(`https://api.quran.gading.dev/surah/${id}`)
        .then((res) => res.json())
        .then((datas) => {
          surah.value = datas.data
          surahName.value = surah.value.name.transliteration
        })
    } catch (err) {
      error.value = err.message
    }
  }

  return { surahs, error, load, loadSurah, surah, surahName }
}

export default getSurahs
