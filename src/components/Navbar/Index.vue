<template>
  <nav class="p-3 flex dark:bg-neutral border-b-2">
    <div class="flex w-full justify-between items-center xl:hidden">
      <NavbarDrawer />
      <AppTitle />
      <DarkMode />
    </div>
    <div class="hidden xl:flex gap-10 justify-around items-center w-full">
      <div>
        <AppTitle />
      </div>
      <div>
        <NavbarItem :class="navbarItemClass" />
      </div>
      <div>
        <DarkMode />
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavbarDrawer from "./NavbarDrawer.vue"
import NavbarItem from "./NavbarItem.vue"
import DarkMode from "../Darkmode.vue"
import AppTitle from "./AppTitle.vue"

const navbarItemClass = "flex gap-10"
</script>

<style lang="scss" scoped></style>
