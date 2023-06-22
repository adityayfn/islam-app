<template>
  <div
    class="hover:bg-fourth rounded-sm mx-1 my-2 px-2 py-1 hover:text-black cursor-pointer"
    @click="darkMode()"
  >
    <font-awesome-icon
      :icon="darkOn ? ['fas', 'sun'] : ['fas', 'moon']"
      size="lg"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
export default {
  setup() {
    const darkOn = ref(false)
    const darkMode = () => {
      darkOn.value = !darkOn.value

      if (darkOn.value) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("darkOn", "true")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("darkOn", "false")
      }
    }
    onMounted(() => {
      const darkOnStorage = localStorage.getItem("darkOn")
      if (darkOnStorage == "true") {
        darkOn.value = true
        document.documentElement.classList.add("dark")
      } else {
        darkOn.value = false
        document.documentElement.classList.remove("dark")
      }
    })

    return {
      darkMode,
      darkOn,
    }
  },
}
</script>

<style lang="scss" scoped></style>
