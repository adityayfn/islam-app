<template>
  <div class="drawer w-10">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content w-10 text-secondary">
      <!-- Page content here -->
      <label for="my-drawer">
        <v-icon class="cursor-pointer" name="md-menuopen" scale="2.1"></v-icon>
      </label>
    </div>
    <div class="drawer-side z-10">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="menu p-4 w-64 min-h-full bg-white text-secondary dark:bg-black border-r-2 border-secondary"
      >
        <div class="flex justify-between items-center mt-2 text-secondary">
          <AppTitle />
          <label for="my-drawer">
            <v-icon
              class="cursor-pointer"
              name="ri-menu-unfold-line"
              scale="2.1"
            ></v-icon>
          </label>
        </div>
        <hr class="border-b dark:border-base-300 mb-5" />

        <NavbarItem :class="navbarItemClass" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarItem from "./NavbarItem.vue"
import AppTitle from "./AppTitle.vue"

const navbarItemClass = "flex flex-col gap-4"
</script>

<style></style>
