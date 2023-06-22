<template>
  <div class="jumbotron h-48 md:h-64 w-full mt-10 relative">
    <nav
      class="flex justify-around text-third bg-white z-10 dark:bg-black dark:text-fourth fixed top-0 w-full border-b-2 border-third"
    >
      <div class="px-2 hover:bg-fourth rounded-sm mx-1 my-2 hover:text-black">
        <router-link
          :to="{ name: 'Home' }"
          class="font-bold text-xl cursor-pointer"
          >Home</router-link
        >
      </div>

      <Darkmode />
    </nav>
    <div class="mx-2 pt-16">
      <h1
        class="text-fourth font-bold w-52 md:w-[24rem] md:text-3xl md:ml-4 md:mt-5"
      >
        Reading Al-Qur'an everywhere and every time
      </h1>
    </div>
  </div>
</template>
<script>
import Darkmode from "./Darkmode.vue"
export default {
  components: {
    Darkmode,
  },
}
</script>
<style>
.jumbotron {
  background-image: url("/public/assets/bg.jpg");
  background-size: cover;
}
</style>
