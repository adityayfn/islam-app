<template>
  <a :href="props.href" class="tooltip" data-tip="Detail Surah">
    <v-icon name="bi-info-circle-fill" scale="1.2"></v-icon>
  </a>

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

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps(["path", "titleModal", "content", "href", "id"])
</script>

<style></style>
