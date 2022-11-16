<template>
  <div class="flex flex-col items-center gap-5">
    <BaseLoadingSpinner />
    <div class="text-3xl">{{ loadingMessage }}</div>
  </div>
</template>

<script setup>
import BaseLoadingSpinner from "@/components/BaseLoadingSpinner.vue";

defineProps({
  loadingMessage: {
    type: String,
    required: false,
    default: "Loading...",
  },
});
</script>
