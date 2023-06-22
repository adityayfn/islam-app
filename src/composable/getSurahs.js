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
      await fetch("https://quranapi.idn.sch.id/surah")
        .then((res) => res.json())
        .then((datas) => {
          let i = datas.data
          surahs.value = i
        })
    } catch (err) {
      error.value = err.message
    }
  }

  const loadSurah = async () => {
    try {
      await fetch(`https://quranapi.idn.sch.id/surah/${id}`)
        .then((res) => res.json())
        .then((datas) => {
          surah.value = datas
        })
    } catch (err) {
      error.value = err.message
    }
  }

  return { surahs, error, load, loadSurah, surah }
}

export default getSurahs
