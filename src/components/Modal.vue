<template>
  <!-- The button to open modal -->
  <a :href="props.href"><SvgIcon :path="props.path" /></a>
  <!-- Put this part before </body> tag -->
  <div class="modal" :id="props.id">
    <div class="modal-box dark:bg-neutral">
      <h3 class="font-bold text-lg dark:text-base-200">
        {{ props.titleModal }}
      </h3>
      <p class="py-4 dark:text-base-200">{{ props.content }}</p>
      <div class="modal-action">
        <a href="#" class="btn btn-secondary">Close</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import SvgIcon from "./SvgIcon.vue"

const props = defineProps(["path", "titleModal", "content", "href", "id"])
</script>

<style></style>
