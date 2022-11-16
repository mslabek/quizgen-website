<template>
  <div class="p-3 text-center mb-5">
    <h2 class="text-2xl mb-2">{{ topic.name.replace("_", " ") }}</h2>
    <p class="text-lg text-slate-500">Number of items: {{ topic.itemCount }}</p>
  </div>
</template>

<script setup>
defineProps({
  topic: {
    type: Object,
    required: true,
  },
});
</script>
