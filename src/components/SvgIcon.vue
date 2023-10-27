<template>
  <svg-icon type="mdi" :path="props.path" :size="props.size"></svg-icon>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon"
import { defineProps } from "vue"

const props = defineProps(["path", "size"])
</script>

<style></style>
