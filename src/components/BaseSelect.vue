<template>
  <form class="flex flex-col mb-6">
    <label for="select" class="text-base">
      <div>{{ label }}</div>
      <div class="text-xs">{{ description }}</div>
    </label>
    <select
      :value="modelValue"
      class="p-3 bg-white shadow-lg rounded-lg text-base my-2"
      :class="{ 'border border-red-800 bg-red-100': errors.length != 0 }"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option disabled value="">Select Property Type</option>
      <option v-for="item in selectionList" :key="item">
        {{ item }}
      </option>
    </select>
    <span v-for="error in errors" :key="error" class="text-red-600">{{
      error.$message
    }}</span>
  </form>
</template>

<script setup>
defineProps({
  selectionList: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  errors: {
    type: Array,
    default: null,
  },
});

defineEmits(["update:modelValue"]);
</script>
