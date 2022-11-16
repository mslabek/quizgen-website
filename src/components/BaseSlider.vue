<template>
  <form class="flex flex-col mb-8">
    <label for="range" class="text-base mb-2">
      <div>{{ label }}{{ modelValue }}</div>
    </label>
    <input
      id="range"
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </form>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  max: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
});

defineEmits(["update:modelValue"]);
</script>
