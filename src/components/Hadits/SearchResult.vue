<template>
  <div class="w-full md:w-[750px] xl:w-[1100px] my-0 mx-auto">
    <div
      class="border-2 rounded-md hover:border-secondary m-4 p-2 flex flex-col gap-5 arab dark:text-base-200"
    >
      <h1 class="text-md font-bold">
        Hadits {{ props.result.name }} nomor {{ props.result.number }}
      </h1>
      <h1 class="text-3xl">{{ props.result.arab }}</h1>
      <h1>{{ props.result.id }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps(["result"])
</script>

<style lang="scss" scoped></style>
