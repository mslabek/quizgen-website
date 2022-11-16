<template>
  <div>
    <div class="w-full bg-gray-200 h-10">
      <div
        class="bg-blue-600 h-10"
        :style="{ width: widthPercentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const widthPercentage = computed(() => {
  return (props.current / props.total) * 100;
});
</script>
